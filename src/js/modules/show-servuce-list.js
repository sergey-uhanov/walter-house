import {toggleMainSliderLock} from "@/js/modules/screens-slider.js";


export function showPopUpServiceList() {
    const buttonOpen = document.querySelector('.extra-content__services')
    const dialog = document.getElementById('service-list');
    const closeButton = document.getElementById('closeService');


    buttonOpen.addEventListener('click', (event) => {


        dialog.showModal()
        toggleMainSliderLock(true)
    })


    closeButton.addEventListener('click', () => {
        dialog.close()
        toggleMainSliderLock(false)
    });

}