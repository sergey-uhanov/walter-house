import JustValidate from 'just-validate';
import {formatIncompletePhoneNumber, parsePhoneNumberFromString} from 'libphonenumber-js';


export let isValidatePhone = false
export let isValidateName = false

export function validateCallBack() {


    const validation = new JustValidate('#call-back-form', {
        errorFieldCssClass: 'is-invalid',
    });

    validation
        .addField('#user-name', [
            {
                rule: 'required',
                errorMessage: 'Name is required. Please enter your name.',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Name must have at least 3 characters.',
            },
            {
                rule: 'maxLength',
                value: 20,
                errorMessage: 'Name must not exceed 20 characters.',
            },
            {
                rule: 'customRegexp',
                value: /^[A-Za-z\s]+$/,
                errorMessage: 'Only letters and spaces are allowed in the name.',
            },
        ])
        .onSuccess((event) => {
            event.preventDefault();
            isValidateName = true;

        })
        .onFail(() => {
            isValidateName = false;
        });
}


export function validatePhoneNumber() {
    const form = document.getElementById('call-back-form');
    const phoneInput = document.getElementById('user-phone');
    const errorContainer = document.getElementById('user-phone-errors');

    phoneInput.addEventListener("input", (event) => {
        const rawValue = event.target.value;
        const formattedValue = formatIncompletePhoneNumber(rawValue, 'US');
        phoneInput.value = formattedValue;
        validate()
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();


        isValidatePhone = validate();
    });

    function validate() {
        const phoneValue = phoneInput.value.trim();
        const phoneNumber = parsePhoneNumberFromString(phoneValue, 'US');

        if (!phoneValue) {
            showError('Phone number is required.');
            return false;
        }

        if (!phoneNumber || !phoneNumber.isValid()) {
            showError('Invalid phone number. Please enter a valid number.');
            return false;
        }

        clearError();
        return true;
    }

    function showError(message) {
        errorContainer.innerHTML = `<span class="field__errors-inner">${message}</span>`;
        phoneInput.classList.add('is-invalid');
    }

    function clearError() {
        errorContainer.innerHTML = '';
        phoneInput.classList.remove('is-invalid');
    }

    return validate;
}


