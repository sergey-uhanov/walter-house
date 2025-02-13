import '../scss/style.scss';
import {burgerMenu} from "@/js/modules/burger-menu.js";
import {popUpRequestCall} from "@/js/modules/pop-up-request-call.js";
import {validateCallBackPopUp, validatePhoneNumberPopUp} from "@/js/modules/validate-pop-form.js";


document.addEventListener('DOMContentLoaded', () => {
    burgerMenu()
    popUpRequestCall()
    validateCallBackPopUp()
    validatePhoneNumberPopUp()
});



