document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    if (menuIcon && menu) {
        // Проверяем клик по иконке меню
        menuIcon.addEventListener("click", () => {
            console.log("Бургер меню кликнуто"); // Сообщение для проверки клика
            menu.classList.toggle("_active");
            menuIcon.classList.toggle("_active");
            console.log("Классы _active добавлены/удалены");
        });
    } else {
        console.error("Элемент .menu-icon или .menu не найден!");
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