document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let intervalId;

    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    };

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        clearInterval(intervalId); // Clear interval when manually navigating
        nextSlide();
        startInterval(); // Restart interval after manual navigation
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        clearInterval(intervalId); // Clear interval when manually navigating
        prevSlide();
        startInterval(); // Restart interval after manual navigation
    });

    const startInterval = () => {
        intervalId = setInterval(nextSlide, 3000); // Move to next slide every 3 seconds
    };

    startInterval(); // Start interval initially

    showSlide(currentIndex);
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
    });
    ScrollReveal().reveal('#product1 h2, .banner-box , .blog-header', { origin: 'top' });
    ScrollReveal().reveal('#feature , .pro-container , .banner3 , #pagination', { origin: 'bottom' });
    ScrollReveal().reveal('.col , .hero h1 , .hero button , .single-pro-image', { origin: 'left' });
    ScrollReveal().reveal('.about-col2 , .contact-right , .single-pro-details , .blog-box', { origin: 'right' });

// ----------------------------------weather-------------------------------
