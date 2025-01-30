import Swiper from 'swiper';
import {Mousewheel, Navigation, Pagination,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {disablePageScroll, enablePageScroll} from '@fluejs/noscroll';

function initGallerySwiper(container) {

    if (!container.swiper) { // Проверяем, инициализирован ли уже слайдер
        new Swiper('.gallery', {

            direction: 'horizontal',
            loop: true,

        });
    }
}

export function handlerClickingSlider() {


    const initSliderButtons = document.querySelectorAll('.init-slider-button');

    initSliderButtons.forEach(button => {
        button.addEventListener('click', () => {

            const gridItem = button.closest('.grid__item');


            if (gridItem) {
                const gallery = gridItem.querySelector('.gallery');


                if (gallery) {

                    gallery.classList.remove('gallery_hidden');

                    initGallerySwiper(gallery)
                }
            }
        });
    });
}