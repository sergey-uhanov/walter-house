import {isValidateName, isValidatePhone} from "@/js/modules/validate-pop-form.js"

export function popUpRequestCall() {
    const buttonOpen = document.querySelector('.header__right-side');
    const popup = document.querySelector('.pop-up-request');
    const activeArea = document.querySelector('.call-back_transparent');
    const buttonSubmit = document.querySelector('.call-back__button');


    buttonOpen.addEventListener('click', (e) => {
        popup.classList.toggle('pop-up-request_show');
        document.querySelector('.pop-up-request__input-block').style.display = 'block';
        document.querySelector('.pop-up-request__successful-message').style.display = 'none';
        document.querySelectorAll('.field__input').forEach(el => {
            el.value = '';
        })
    })
    popup.addEventListener('click', (e) => {

        if (popup.classList.contains('pop-up-request_show') && !activeArea.contains(e.target)) {
            popup.classList.remove('pop-up-request_show');
            document.querySelector('.pop-up-request__input-block').style.display = 'block';
            document.querySelector('.pop-up-request__successful-message').style.display = 'none';
        }
    })

    buttonSubmit.addEventListener('click', (e) => {


        setTimeout(() => {
            if (isValidateName && isValidatePhone) {
                document.querySelector('.pop-up-request__input-block').style.display = 'none';
                document.querySelector('.pop-up-request__successful-message').style.display = 'block';

                document.querySelectorAll('.field__input').forEach(el => {
                    el.value = '';
                })

            }

        }, 500)
    })

}