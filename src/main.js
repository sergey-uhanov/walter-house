import './scss/style.scss';
import {screensSlider} from "@/modules/screens-slider.js";
import {validateCallBack} from "@/modules/form-validate-call-back.js";


// Инициализация DOM
document.addEventListener('DOMContentLoaded', () => {
    screensSlider()
    validateCallBack()
});
