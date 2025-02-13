import {isValidateName, isValidatePhone} from "@/js/modules/form-validate-call-back.js"


export function showSeccessfulMessageCallBackForm() {
    const form = document.getElementById('call-back-form')
    const seccessfulMessage = document.querySelector('.call-back-form__successful-message')
    const submitButton = document.getElementById('call-back-button')

    submitButton.addEventListener('click', (e) => {

        setTimeout(() => {
            if (isValidateName && isValidatePhone) {
                console.log(1)
                form.style.opacity = '0'
                form.style.pointerEvents = 'none'
                seccessfulMessage.classList.add('call-back-form__successful-message_show')
            }
        }, 500)
    })
}