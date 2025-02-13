export function showCallBack(isShow) {
    const form = document.querySelector('.call-back-form_bottom');
    if (form && isShow) {
        form.classList.remove('call-back_hidden');
    } else {
        form.classList.add('call-back_hidden');
    }
}