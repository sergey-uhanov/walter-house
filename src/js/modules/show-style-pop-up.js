import {toggleMainSliderLock} from "@/js/modules/screens-slider.js";

export function showStylePopUp() {
    const buttonOpen = document.querySelectorAll('.cost-calculation__information')
    const dialog = document.getElementById('myDialog');
    const title = document.querySelector('.style-popup__title');
    const closeButton = document.getElementById('closeDialog');


    buttonOpen.forEach(button => {
        button.addEventListener('click', (event) => {
            const type = button.getAttribute('inform')
            title.innerText = `Style ${type.toUpperCase()}`;
            dialog.showModal()
            toggleMainSliderLock(true)
        })
    })


    closeButton.addEventListener('click', () => {
        dialog.close()
        toggleMainSliderLock(false)
    });

}

