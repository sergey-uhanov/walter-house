import JustValidate from 'just-validate';
import {parsePhoneNumberFromString} from 'libphonenumber-js';


export function validateCallBack() {
    const validation = new JustValidate('#call-back-form', {
        errorFieldCssClass: 'is-invalid', // Класс для невалидных полей

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
            event.preventDefault(); // Отмена стандартной отправки формы
            console.log('Form submitted successfully!');
        });
}


export function validatePhoneNumber() {
    const form = document.getElementById('call-back-form');
    const phoneInput = document.getElementById('user-phone');
    const errorContainer = document.getElementById('user-phone-errors');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы

        const phoneValue = phoneInput.value.trim(); // Получаем значение телефона
        const phoneNumber = parsePhoneNumberFromString(phoneValue, 'US'); // Второй аргумент — код страны (например, 'US', 'RU')
        // Проверяем, введён ли телефон и валиден ли он
        if (!phoneValue) {
            showError('Phone number is required.');
            return;
        }

        if (!phoneNumber || !phoneNumber.isValid()) {
            showError('Invalid phone number. Please enter a valid number.');
            return;
        }

        // Если всё корректно, форматируем номер и отправляем
        console.log('Valid phone number:', phoneNumber.formatInternational());
        clearError();

        // Здесь можно добавить логику отправки формы
        alert('Form submitted successfully!');
    });

    function showError(message) {
        errorContainer.innerHTML = `<span class="field__errors-inner">${message}</span>`
        phoneInput.classList.add('is-invalid');
    }

    function clearError() {
        errorContainer.innerHTML  = '';
        phoneInput.classList.remove('is-invalid');
    }

}

