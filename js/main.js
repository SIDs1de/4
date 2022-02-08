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

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

let burger__items = document.querySelectorAll('.burger__item');
for (let burger__item of burger__items) {
  burger__item.addEventListener('click', function () {
    body.classList.remove('active');
    burger.classList.remove('active');
    burger__black.classList.remove('active');
  });
}
