   //1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
   const dropDownitems = document.querySelectorAll('.dropdown-item');
   dropDownitems.forEach(element => {
       element.classList.add('super_dropdown')
   });
   // 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было
   const btnEl = document.querySelector('.btn');
   console.log(btnEl)
   if (btnEl.classList.contains('btn-secondary')) {
       btnEl.classList.remove('btn-secondary')
   } else {
       btnEl.classList.add('super_dropdown')
   }
   //3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
   const dropDownMenuEl = document.querySelector('.menu');
   if(dropDownMenuEl.classList.contains('dropdown-menu')) {
       dropDownMenuEl.classList.remove('dropwon-menu')
   }else{
    console.log('asd')
   }
   //4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
   //<a href="#">link</a>

   const dropdownElement = document.querySelectorAll('.dropdown')[1];
   dropdownElement.insertAdjacentHTML("afterend", `<a href="#">link</a>`);
   //5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
   const dropDownMenuButtonIdEl = document.querySelector('#dropdownMenuButton');
   dropDownMenuButtonIdEl.setAttribute('id', 'superDropdown');
   console.log(dropDownMenuButtonIdEl)

   //6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset. 

   const dropdownMenuElement = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
   dropdownElement.dataset.dd = 3;
   console.log(dropdownMenuElement)

   //7. Удалите атрибут type у элемента с классом "dropdown-toggle".
   const buttonBlock = document.querySelector('.dropdown-toggle');
   buttonBlock.removeAttribute('type');
   console.log(buttonBlock)

