import JustValidate from 'just-validate';

export function validateCallBack() {
    const validation = new JustValidate('#call-back-form', {
        errorFieldCssClass: 'is-invalid', // Класс для невалидных полей

    });

    validation
        .addField('#user-name', [
            {
                rule: 'required',
            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 15,
            },
        ])

        .onSuccess((event) => {
            event.preventDefault(); // Отмена стандартной отправки формы
            console.log('Form submitted successfully!');
        });
}