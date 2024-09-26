"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/


class Library {
    #books = [];

    //конструктор
    constructor(listOfBooks) {
        try {
            if (listOfBooks.length === 0) {
                throw new Error('Вы не передали книги в библиотеку!');
            } else {
                listOfBooks.forEach(book => {
                    if (this.#books.includes(book)) {
                        throw new Error(`В списке книг есть дубликаты: "${book}"!`);
                    } else {
                        this.#books.push(book);
                        return this.#books;
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    //возвращает текущий список книг
    get allBooks() {
        return this.#books;
    }

    //добавления книги
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Книга с названием "${title}" уже существует в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }

    //удаления книги
    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                console.log(`Обновленный список книг: ${this.#books}`);
                return this.#books;
            } else {
                throw new Error(`Книги с названием "${title}" нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    //проверка наличия книги в библиотеке
    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}
const library = new Library(["Ночь", "Три поросенка","Три медведя"]);
console.log(library.allBooks);

// console.log(library.addBook("Три поросенка"));
// console.log(library.addBook("Тень"));


// console.log(library.removeBook("Бременские музыканты"));
// console.log(library.removeBook("Тень"));
// console.log(library.removeBook("Три поросенка"));

// console.log(library.hasBook("Снежная королева"));
// console.log(library.hasBook("Три поросенка"));
// console.log(library.hasBook("Ночь"));
// console.log(library.hasBook("Три медведя"));