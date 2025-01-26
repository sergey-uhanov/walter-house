import Swiper from 'swiper';
import {Mousewheel, Navigation, Pagination,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function screensSlider() {

// Initialize Swiper
    const swiper = new Swiper('.screens-swiper', {
        modules: [Navigation, Pagination, Mousewheel,EffectFade],
        direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 0,
        mousewheel: true,
        effect:"fade",
        lazy: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });
}