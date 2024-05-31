// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth"
        });
      });
    }
  
    // Navbar Toggle for Smaller Screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('#navbarNav');
    navbarToggler.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
  
    // Interactive Elements (Example: Profile Image Click Event)
    const profileImages = document.querySelectorAll('.profile-img');
    for (const img of profileImages) {
      img.addEventListener('click', function() {
        alert('Profile Image Clicked!');
      });
    }
  });
// Function to handle smooth scrolling when clicking on links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

