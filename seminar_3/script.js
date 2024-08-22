//1.Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded",
    function(event){
        console.log("TAGS LOADED");
    }
)
//2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load',function(e){
    console.log("EVERITHING IS LOADED")
})
//3.При клике на какой-либо тег на странице в консоль должно 
//выводиться сообщение наподобие:

const divEL = document.querySelector('.super_element').parentNode;
const superEl = document.querySelector('.super_element');
console.log(divEL.contains(superEl));
superEl.addEventListener("click", function(event){
const target = event.target;
console.log(target);
let a = superEl.tagName;
console.log(a.toLowerCase())
alert("target = " + event.target.tagName + ", this=" + this.tagName);

})

//4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener('mouseover',function(event){
    console.log('You hover there')
})
//5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить 
//текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке,
// то ничего выводить не нужно. Необходимо использовать делегирование.
const ulEl = document.querySelector('ul');
console.log(ulEl);
ulEl.addEventListener('click',event=>{
    if(event.target.tagName!=='BUTTON'){
        return;
    }else{
        console.log(event.target.textContent)
    }
}) 
// 7. С помощью JS необходимо изменить цвет заднего фона каждого 
// второго тега li.
 const changerColor = document.querySelectorAll('li');
 //changerColor.forEach(element=>element.style.backgroundColor='red');
//  for(let i = 0; i< changerColor.length;i++){
//     if(i%2===0){
//         changerColor[i].style.backgroundColor='red'
//     }
//  }
 document.querySelectorAll('li:nth-child(2n)')
 .forEach(el => el.style.backgroundColor = 'red');


    
