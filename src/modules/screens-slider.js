import Swiper from 'swiper';
import {Mousewheel, Navigation, Pagination,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {showCallBack} from "@/modules/show-call-back-form.js";

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
        },
        on:{
            init: function(){},

            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide.classList.contains('screens-swiper__slide_hidden-form')){
                    showCallBack(false)
                } else {
                    showCallBack(true)

                }


            }
        }

    });
}