var link = document.querySelector('.mobile-phone');
var popup = document.querySelector('.modal-mobile_phone');
var close = document.querySelector('.mobile-close');

var menu = document.querySelector(".menu");
var burger = document.querySelector('.modal-menu');
var burgerClose = document.querySelector(".burger-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-mobile_show');
    close.classList.add('mobile-close_show');
    link.classList.remove('mobile-phone');
    console.log('click');
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-mobile_show');
    close.classList.remove('mobile-close_show');
    link.classList.add('mobile-phone');
});

menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    burger.classList.add('modal-menu_show');
    menu.classList.remove('menu');
    burgerClose.classList.add('burger-close_show');
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    burger.classList.remove('modal-menu_show');
    burgerClose.classList.remove('burger-close_show');
    menu.classList.add('menu');
});