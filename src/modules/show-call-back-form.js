export function showCallBack(isShow){
    const form = document.getElementById('call-back-form');
    if (form && isShow) {
        form.classList.remove('call-back_hidden');
    } else {
        form.classList.add('call-back_hidden');
    }
}