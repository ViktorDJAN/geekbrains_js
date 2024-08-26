   // Task_1
   const spanEl = document.querySelector('span');
   const inputFrom = document.querySelector('#from');
   spanEl.innerText = inputFrom.value;
   const changing =
       inputFrom.addEventListener('input', function (event) {
           const target = event.target.value;
           spanEl.innerText = target;

       })
   // OPTION 2

   // const formId = document.querySelector("#from");
   // const span = document.querySelector("span");
   // const chageHead = () => {
   //     span.innerText = formId.value;
   // }
   // formId.addEventListener('input', chageHead);

   // Task_2
   const messageBtnEl = document.querySelector('.messageBtn');
   const messageEl = document.querySelector('.message');
   messageBtnEl.addEventListener('click', function (event) {
       const divOne = (document.createElement('div'));
       divOne.classList.add('animate_animated');
       const divTwo = (document.createElement('div'));
       divTwo.classList.add('animate_fadeInLeftBig')
       messageEl.appendChild(divOne);
       messageEl.appendChild(divTwo);
       messageEl.style.visibility = 'visible';
   })
   // task3
   const form = document.querySelector('form');
   const formControl = document.querySelectorAll('.form-control');
   const btn = document.querySelector('form button');

   form.addEventListener('submit', (e) => {
       e.preventDefault();
       formControl.forEach((element) => {
           if (element.tagName === 'INPUT') {
               isValid(element);
           } else if (element.tagName === 'SELECT') {
               isValid(element);
           }
       });
   });
   function isValid(elem) {
       if (elem.value === '') {
           elem.style.backgroundColor = 'red';
           elem.classList.add('error');
           elem.setCustomValidity('Пустое значение');
           elem.reportValidity();
       } else {
           btn.textContent = 'ОК';
           setTimeout(() => {
               btn.textContent = 'Отправить';
           }, 1000);
       }
   }
   formControl.forEach((el) => {
       el.addEventListener('input', () => {
           el.setCustomValidity('');
           el.removeAttribute('style');
           el.classList.remove('error');
       });
   });
