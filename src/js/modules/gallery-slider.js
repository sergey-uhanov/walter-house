import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {toggleMainSliderLock} from "@/js/modules/screens-slider.js";
import {Navigation} from "swiper/modules";

function initGallerySwiper(container) {


    return new Swiper(`.gallery${container}`, {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.gallery__button-next',
            prevEl: '.gallery__button-prev',
        },
        pagination: {
            el: '.gallery__pagination',
        },
        on: {
            init: function () {
                updatePagination(this);
            },
            slideChange: function () {
                updatePagination(this);
            },
        }
    });
}

function updatePagination(swiperInstance) {
    const currentSlide = swiperInstance.realIndex + 1;
    const totalSlides = swiperInstance.slides.length;


    const curSlide = document.querySelectorAll('.gallery__current-slide')
    const totalSlidesContainer = document.querySelectorAll('.gallery__total-slides')


    if (curSlide && totalSlidesContainer) {
        curSlide.forEach(el => {
            el.innerText = currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
        })
        totalSlidesContainer.forEach((el) => {
            el.innerText = totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`;
        })
    }
}

export function handlerClickingSlider() {
    let currentSwiper = null;

    const initSliderButtons = document.querySelectorAll('.init-slider-button');

    initSliderButtons.forEach(button => {

        button.addEventListener('click', () => {

            const gridItem = button.closest('.grid__item');

            if (gridItem) {
                const gallery = gridItem.querySelector(`.gallery${gridItem.getAttribute('index')}`);

                if (gallery) {
                    if (currentSwiper) {
                        currentSwiper.destroy(true, true);
                        currentSwiper = null;
                    }
                    gallery.classList.remove('gallery_hidden');

                    currentSwiper = initGallerySwiper(`${gridItem.getAttribute('index')}`);

                    toggleMainSliderLock(true);
                }
            }
        });
    });

    const goBackButton = document.querySelectorAll('.gallery__go-to-back_close');

    goBackButton.forEach(el => {

        el.addEventListener('click', () => {

            const gallery = document.querySelectorAll('.gallery');

            if (gallery) {
                gallery.forEach((el, i) => {
                    el.classList.add('gallery_hidden');
                })

                if (currentSwiper) {
                    currentSwiper.destroy(true, true);
                    currentSwiper = null;
                }

                toggleMainSliderLock(false);
            }
        });
    });
}

