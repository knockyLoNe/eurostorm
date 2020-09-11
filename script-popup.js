var link = document.querySelector('.mobile-phone');
var popup = document.querySelector('.modal-mobile_phone');
var close = document.querySelector('.mobile-close');

var menu = document.querySelector(".menu");
var burger = document.querySelector('.modal-menu');
var burgerClose = document.querySelector(".burger-close");

var arrowDown = document.querySelector(".img-down");
var shortCut = document.querySelector('.mobile-short_cut');
var docCard = document.querySelector(".doctors-bio");
var docCardShow = document.querySelector(".doctors-item");

function closeBurgerMenu() {
    burger.classList.remove('modal-menu_show');
    burgerClose.classList.remove('burger-close_show');
    menu.classList.add('menu');
}

function closePhoneMenu() {
    popup.classList.remove('modal-mobile_show');
    close.classList.remove('mobile-close_show');
    link.classList.add('mobile-phone');
}

link.addEventListener("click", function () {
    popup.classList.add('modal-mobile_show');
    close.classList.add('mobile-close_show');
    link.classList.remove('mobile-phone');
    closeBurgerMenu();
});

close.addEventListener("click", closePhoneMenu);

menu.addEventListener("click", function () {
    burger.classList.add('modal-menu_show');
    menu.classList.remove('menu');
    burgerClose.classList.add('burger-close_show');
    closePhoneMenu();
});

burgerClose.addEventListener("click", closeBurgerMenu);

arrowDown.addEventListener("click", function (evt) {
    evt.preventDefault();
    docCard.classList.add('doctors-bio-show');
    shortCut.classList.remove('mobile-short_cut');
    console.log('click');
});