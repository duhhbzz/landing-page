document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-button');
  
    hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        navLinks.classList.remove('show');
      });
  });