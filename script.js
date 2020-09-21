window.onload = function () {
    doctorsSlider();
    caseSlider();
    blogSlider();
    diplomSlider();
    historySlider();
    advisableSlider();
    reviewSlider();
    buttonTop();
    implantSlider();
    implantSliderMobile();
    scrollButton();
    accHide();
    removeSelectValue();
}

window.onscroll = function () {
    buttonTop();
}

const isMobile = window.innerWidth < 555;

function accHide() {
    var acc = document.querySelectorAll('.acc-header');
    var blocks = document.querySelectorAll('.acc-item')

    acc.forEach((ac, index) => {
        ac.onclick = function () {
            var button = ac.querySelector('button');
            ac.classList.toggle('acc-header_active');
            button.classList.toggle('acc-header__but-active')
            blocks[index].classList.toggle('acc-item_active')
        }
    })

}

function doctorsSlider() {
    var swiper = new Swiper('.doctors-container', {
        slidesPerView: isMobile ? 1 : 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.doctors-button_next',
            prevEl: '.doctors-button_prev',
        },
    });
}

function caseSlider() {
    var swiper = new Swiper('.case-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.case-button_next',
            prevEl: '.case-button_prev',
        },
    });
}

function blogSlider() {
    var swiper = new Swiper('.blog-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.blog-button_next',
            prevEl: '.blog-button_prev',
        },
    });
}

function reviewSlider() {
    var swiper = new Swiper('.review-slider', {
        slidesPerView: isMobile ? 1 : 2,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.review-button_next',
            prevEl: '.review-button_prev',
        },
    });
}

function advisableSlider() {
    var swiper = new Swiper('.advisable-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.advisable-button_next',
            prevEl: '.advisable-button_prev',
        },
    });
}

function implantSlider() {
    var swiper = new Swiper('.implant-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.implant-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "Кейс " + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.implant-button_next',
            prevEl: '.implant-button_prev',
        },
    });
}

function implantSliderMobile() {
    var swiper = new Swiper('.implant-container2', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.implant-pagination2',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "Кейс " + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.implant-button_next',
            prevEl: '.implant-button_prev',
        },
    });
}

function diplomSlider() {
    var swiper = new Swiper('.diplom-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.diplom-button_next',
            prevEl: '.diplom-button_prev',
        },
    });
}

function historySlider() {
    var swiper = new Swiper('.history-container', {
        slidesPerView: isMobile ? 1 : 2,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.history-button_next',
            prevEl: '.history-button_prev',
        },
    });
}


function buttonTop() {
    var but = document.querySelector('.scroll-top');
    var scrolled = window.pageYOffset;

    if (scrolled > 100) {
        but.classList.add('scroll-top_active')
    } else {
        but.classList.remove('scroll-top_active')
    }
}

function scrollButton() {
    document.querySelector('.scroll-top').onclick = function () {
        scrollToTop();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

var link = document.querySelector('.mobile-phone');
var popup = document.querySelector('.modal-mobile_phone');

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-mobile_show');
});

const selects = document.querySelectorAll('select.buttons-select__item');

function removeSelectValue() {
    if (isMobile) selects.forEach((select) => (select.value = ''));
}

selects.forEach((select) =>
    select.addEventListener('change', removeSelectValue)
);