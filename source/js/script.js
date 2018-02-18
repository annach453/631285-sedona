document.addEventListener("DOMContentLoaded", function () {
  var navMain = document.querySelector('.nav');
  var navOpen = document.querySelector('.nav__button--open');
  var navClose = document.querySelector('.nav__button--close');

  navMain.classList.add('nav--closed');

  navOpen.addEventListener('click', function () {
    navMain.classList.remove('nav--closed');
    navClose.style.display = "block";
  });

  navClose.addEventListener('click', function () {
    console.log("close");
    navMain.classList.add('nav--closed');
  });
});
