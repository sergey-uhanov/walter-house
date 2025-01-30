import '../scss/style.scss';
import {screensSlider} from "@/js/modules/screens-slider.js";
import {validateCallBack, validatePhoneNumber} from "@/js/modules/form-validate-call-back.js";
import {galleryScreen} from "@/js/modules/gallery.js";
import {handlerClickingSlider} from "@/js/modules/gallery-slider.js";



document.addEventListener('DOMContentLoaded', () => {
    screensSlider()
    validateCallBack()
    validatePhoneNumber()
    galleryScreen()
    handlerClickingSlider()
});
