import './scss/style.scss';
import {screensSlider} from "@/modules/screens-slider.js";
import {validateCallBack, validatePhoneNumber} from "@/modules/form-validate-call-back.js";
import {galleryScreen} from "@/modules/gallery.js";
import {handlerClickingSlider} from "@/modules/gallery-slider.js";


// Инициализация DOM
document.addEventListener('DOMContentLoaded', () => {
    screensSlider()
    validateCallBack()
    validatePhoneNumber()
    galleryScreen()
    handlerClickingSlider()
});
