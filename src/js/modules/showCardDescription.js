export function showCardsDescription() {

    if (window.innerWidth > 1024) {

        const hoverElements = document.querySelectorAll('.cards-screen__cards-item')
        const hiddenElements = document.querySelector('.call-back-form_bottom')
        const showElement = document.querySelector('.cards-screen__description')


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


        hoverElements.forEach(hoverElement => {
            const typeDescription = hoverElement.getAttribute('factor')

            hoverElement.addEventListener('mouseover', (e) => {

                hiddenElements.style.opacity = '0'
                showElement.style.opacity = '1'

                const showElementTitle = document.querySelector('.cards-screen__title-description')
                const showElementDescription = document.querySelector('.cards-screen__inform')

                showElementTitle.innerText = `Style ${description[typeDescription].style.toUpperCase()}`
                showElementDescription.innerText = `${description[typeDescription].description}`

            })
        })
        hoverElements.forEach(hoverElement => {
            hoverElement.addEventListener('mouseout', (e) => {

                hiddenElements.style.opacity = '1'
                showElement.style.opacity = '0'
            })
        })
    }
}