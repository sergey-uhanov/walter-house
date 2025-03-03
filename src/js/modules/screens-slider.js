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
        speed: 500,
        pagination: {
            el: '.screens-swiper__pagination',
            clickable: true,
        },
        allowSlideNext: true,
        allowSlidePrev: true,
        allowTouchMove: true,
        touchStartPreventDefault: false,
        on: {

            init: function () {


            },


            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];

                const isHiddenFormCallBackSteps = (activeSlide.classList.contains('steps-screen') && window.innerWidth < 1024)
                const isisHiddenFormCallBackGallery = activeSlide.classList.contains('screens-swiper__slide_hidden-form')
                const isisHiddenFormCallBackCards = (activeSlide.classList.contains('screens-swiper__slide_cards') && window.innerWidth < 1024 || window.innerHeight < 1152)

                if (isHiddenFormCallBackSteps || isisHiddenFormCallBackGallery || isisHiddenFormCallBackCards) {

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


    if (lock) {
        swiper.mousewheel.disable();
    } else {
        swiper.mousewheel.enable();
    }

    swiper.update();
    const navBlock = document.querySelector('.screens-swiper__pagination')
    navBlock.style.display = lock ? 'none' : 'block'

}


