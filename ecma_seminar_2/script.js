const Book = {
    title: 'Book One',
    author: 'Auhtor One',
    pages: 10,
    // method displays info of book
    displayInfo(){
        console.log(this.title + ' , ' + this.author + ' , ' + this.pages);
    }
}
Book.displayInfo(0)

class Student {
    constructor(name,age,grade){
        this.name = name,
        this.age = age,
        this.grade = grade
    }
   

    displayInfo(){
        console.log(this.name + ' , ' + this.age + ' , ' + this.grade);
    }
}

const student1 = new Student("John Smith",16,"10th grade");
console.log(student1);