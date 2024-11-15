document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu__link");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
        });
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("_active");
                menuIcon.classList.remove("_active");
            });
        });
    }
});

/*---------Slider*/
const delishSlider = new Swiper('.delish-slider', {
    // loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});