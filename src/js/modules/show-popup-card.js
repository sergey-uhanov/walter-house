import {toggleMainSliderLock} from "@/js/modules/screens-slider.js";


export function showPopUpCards() {
    const buttonOpen = document.querySelectorAll('.cards-screen__cards-item')
    const dialog = document.getElementById('card-popup');
    const title = document.querySelector('.style-popup__title-main');
    const closeButton = document.getElementById('closePopUpCard');

    const description = {
        online: {
            style: 'Online broadcast of repair',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        },
        video: {
            style: 'Video-surveillance and alarm',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        },
        selection: {
            style: 'Selection of furniture',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        },
        household: {
            style: 'Household appliances',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        },
        ultra: {
            style: 'Ultra service',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        },
    }


    buttonOpen.forEach(button => {
        button.addEventListener('click', (event) => {

            const type = button.getAttribute('factor')
            if (!type) return

            title.innerText = `${description[type].style.toUpperCase()}`;

            dialog.showModal()
            toggleMainSliderLock(true)
        })
    })


    closeButton.addEventListener('click', () => {
        dialog.close()
        toggleMainSliderLock(false)
    });

}