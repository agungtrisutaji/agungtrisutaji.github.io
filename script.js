window.addEventListener('scroll', function () {
  const navBar = document.querySelector('nav');
  navBar.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function () {
  const toTop = document.getElementById('backToTop');
  toTop.classList.toggle('show', window.scrollY > 500);
});

const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('nav ul');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('isActive');
  burgerMenu.classList.toggle('slide');
});

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [
    ...document.querySelectorAll('.certificate .box-certificate .box'),
  ];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
