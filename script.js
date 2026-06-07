// Select the mobile menu button and the navigation element
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// When the button is clicked, toggle the "open" class on the nav
menuToggle.addEventListener('click', function () {
  mainNav.classList.toggle('open');
});
