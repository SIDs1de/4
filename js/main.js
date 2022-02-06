let body = document.querySelector('body');
let burger = document.querySelector('.burger');
let burger__black = document.querySelector('.burger__black');
let header__burger = document.querySelector('.header__burger');
let burger__close = document.querySelector('.burger__close');

header__burger.addEventListener('click', function () {
  body.classList.add('active');
  burger.classList.add('active');
  burger__black.classList.add('active');
});

burger__black.addEventListener('click', function () {
  body.classList.remove('active');
  burger.classList.remove('active');
  burger__black.classList.remove('active');
});

burger__close.addEventListener('click', function () {
  body.classList.remove('active');
  burger.classList.remove('active');
  burger__black.classList.remove('active');
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

let burger__items = document.querySelectorAll('.burger__item');
for (let burger__item of burger__items) {
  burger__item.addEventListener('click', function () {
    body.classList.remove('active');
    burger.classList.remove('active');
    burger__black.classList.remove('active');
  });
}
