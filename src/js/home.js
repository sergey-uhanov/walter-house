import '../scss/style.scss';
import {screensSlider} from "@/js/modules/screens-slider.js";
import {validateCallBack, validatePhoneNumber} from "@/js/modules/form-validate-call-back.js";
import {galleryScreen} from "@/js/modules/gallery.js";
import {handlerClickingSlider} from "@/js/modules/gallery-slider.js";
import {showPointGallerySlide} from "@/js/modules/show-point-gallery-slide.js";
import {priceRangeSlide} from "@/js/modules/renge-slide.js";
import {stepsRangeSlider} from "@/js/modules/steps-renge-slider.js";
import {showCardsMobile} from "@/js/modules/show-cards-mobile.js"
import {burgerMenu} from "@/js/modules/burger-menu.js";
import {popUpRequestCall} from "@/js/modules/pop-up-request-call.js";
import {validateCallBackPopUp, validatePhoneNumberPopUp} from "@/js/modules/validate-pop-form.js";
import {showSeccessfulMessageCallBackForm} from "@/js/modules/show-seccessful-message-call-back-form.js";
import {hiddenFormHover} from "@/js/modules/hidden-form-hover.js";
import {showStylePopUp} from "@/js/modules/show-style-pop-up.js";
import {showCardsDescription} from "@/js/modules/showCardDescription.js";
import {showPopUpCards} from "@/js/modules/show-popup-card.js";
import {showPopUpServiceList} from "@/js/modules/show-servuce-list.js";




document.addEventListener('DOMContentLoaded', () => {
    screensSlider()
    validateCallBack()
    validatePhoneNumber()
    galleryScreen()
    handlerClickingSlider()
    showPointGallerySlide()
    priceRangeSlide()
    stepsRangeSlider()
    showCardsMobile()
    burgerMenu()
    popUpRequestCall()
    validateCallBackPopUp()
    validatePhoneNumberPopUp()
    showSeccessfulMessageCallBackForm()
    hiddenFormHover()
    showStylePopUp()
    showCardsDescription()
    showPopUpCards()
    showPopUpServiceList()
});



