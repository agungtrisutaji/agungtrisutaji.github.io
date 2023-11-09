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

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyqMDNhws6zLtFyBj-5v-wFaptf6IQqfIaqnIS4XokQsR2r04xiz5wTgmX-tD1JYzsjzQ/exec';
const form = document.forms['contact-form'];
const btnSubmit = document.querySelector('.kirim');
const btnSpinner = document.querySelector('.loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  btnSpinner.classList.toggle('d-none');
  btnSubmit.style.display = 'none';

  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then((response) => {
      btnSpinner.classList.toggle('d-none');
      btnSubmit.style.display = 'inline-block';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent!',
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
