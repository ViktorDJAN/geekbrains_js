
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const super_linkEl = document.getElementById('super_link')
console.log(super_linkEl.textContent)

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const card_link_els = document.querySelectorAll('.card-link');
console.log(card_link_els)
for(let i = 0;i<card_link_els.length;i++){
    card_link_els[i].textContent = 'ссылка'
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.[]()
const cardLinlEl = document.querySelectorAll('.card-body .card-link');
console.log(cardLinlEl)

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.[]()
const data_number_El = document.querySelector('[data-number = "50"]')
console.log(data_number_El)

// 5. Выведите содержимое тега title в консоль.
const tagContentEl = document.querySelector('title').textContent
console.log(tagContentEl)

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const card_titleEl = document.querySelector('.card-title');
console.log(card_titleEl)
console.log(card_titleEl.parentNode)

//7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pElement= document.createElement('p');
pElement.textContent = 'Привет'
const cardBlockEl = document.querySelector('.card')
cardBlockEl.append(pElement);
console.log(cardBlockEl)
