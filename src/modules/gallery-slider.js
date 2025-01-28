import Swiper from 'swiper';
import {Mousewheel, Navigation, Pagination,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function initGallerySwiper(container) {
    console.log('нициализация слайдера')
    if (!container.swiper) { // Проверяем, инициализирован ли уже слайдер
        new Swiper('.gallery', {
            // Настройки для слайдера галереи
            direction: 'horizontal',
            loop: true,
            // другие настройки
        });
    }
}

export function handlerClickingSlider() {


    const initSliderButtons = document.querySelectorAll('.init-slider-button');

// Добавляем обработчик клика на каждую кнопку
    initSliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Находим ближайший родительский элемент с классом grid__item
            const gridItem = button.closest('.grid__item');

            // Если такой элемент найден, ищем внутри него элемент с классом gallery
            if (gridItem) {
                const gallery = gridItem.querySelector('.gallery');

                // Если галерея найдена, удаляем класс gallery_hidden
                if (gallery) {
                    gallery.classList.remove('gallery_hidden');
                    initGallerySwiper(gallery)
                }
            }
        });
    });
}