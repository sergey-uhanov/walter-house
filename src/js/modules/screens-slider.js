import Swiper from 'swiper';
import {EffectFade, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {showCallBack} from "@/js/modules/show-call-back-form.js";

let swiper

export function screensSlider() {
    hiddenSlides()

    swiper = new Swiper('.screens-swiper', {
        modules: [Navigation, Pagination, Mousewheel, EffectFade],
        direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 0,
        mousewheel: {enabled: true},
        effect: "fade",
        lazy: true,
        speed: 1500,
        pagination: {
            el: '.screens-swiper__pagination',
            clickable: true,
        },
        allowSlideNext: true,
        allowSlidePrev: true,
        allowTouchMove: true,
        on: {

            init: function () {


            },


            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];

                if (activeSlide.classList.contains('screens-swiper__slide_hidden-form')) {

                    showCallBack(false)
                } else {
                    showCallBack(true)

                }
            }
        }
    });
}

//Скрытие слайда при адаптиве
function hiddenSlides() {
    if (window.screen.availWidth < 1024) {
        const secondSlide = document.querySelector('.screens-swiper__slide_second-slide');
        if (secondSlide) {
            secondSlide.remove();
        }

    }
}


export function toggleMainSliderLock(lock) {
    swiper.allowSlideNext = !lock;
    swiper.allowSlidePrev = !lock;
    swiper.allowTouchMove = !lock;

    // const paginationEl = document.querySelector('.swiper-pagination');
    // if (paginationEl) {
    //     paginationEl.style.opacity= lock ? '0' : '1';
    //     paginationEl.style.visible= lock ? 'hidden' : 'visible';
    //
    // }

    if (lock) {
        swiper.mousewheel.disable();
    } else {
        swiper.mousewheel.enable();
    }

    swiper.update();
    const navBlock = document.querySelector('.screens-swiper__pagination')
    navBlock.style.display = lock ? 'none' : 'block'

}


