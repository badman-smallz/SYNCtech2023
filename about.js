 document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  const speakerCarousel = document.getElementById('speakerCarousel');
let carouselPaused = false;

speakerCarousel.addEventListener('mouseenter', () => {
    if (!carouselPaused) {
        speakerCarousel.pause();
        carouselPaused = true;
    }
});

speakerCarousel.addEventListener('mouseleave', () => {
    if (carouselPaused) {
        speakerCarousel.cycle();
        carouselPaused = false;
    }
});

  const accordionButtons = document.querySelectorAll('[data-toggle="collapse"]');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('collapsed');
            
            const targetSelector = button.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.classList.toggle('show');
            }
        });
    });
    
    
    $(document).ready(function () {
        $('#speakerCarousel').carousel();
    });

