//открытие модального окна по клику на ссылку (For suppliers)
let buttonOrder = document.querySelector('a.header-down-menu__item2');
console.log(buttonOrder);
let form = document.querySelector('div.form');
console.log(form);

let closeForm = document.querySelector('a.form-1-close');
buttonOrder.onclick = function () {
  form.style.display = 'block';
};
// закрытие модального окна по клику на крестик
closeForm.onclick = function () {
  form.style.display = 'none';
};