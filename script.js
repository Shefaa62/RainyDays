// Mobile Menu Toggle Function
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking on nav links
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
});

// Testimonials Auto Slider (Updated for 2 desktop / 1 mobile)
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 900,
    breakpoints: {
      768: { // tablet and above
        slidesPerView: 2,
      },
    },
  });
});
