export function hiddenFormHover() {
    if (window.innerWidth > 1024) {

        const hoverElements = document.querySelectorAll('.cost-calculation__level')
        const hiddenElements = document.querySelector('.call-back-form_bottom')
        const showElement = document.querySelector('.cost-calculation__description')


        const description = {
            Vip: 'Lorem1 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
            Elite: 'Lorem2 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
            Extra: 'Lorem3 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
        }


        hoverElements.forEach(hoverElement => {
            const typeDescription = hoverElement.getAttribute('factor')

            hoverElement.addEventListener('mouseover', (e) => {

                hiddenElements.style.opacity = '0'
                showElement.style.opacity = '1'

                const showElementTitle = document.querySelector('.cost-calculation__title-description')
                const showElementDescription = document.querySelector('.cost-calculation__inform')

                showElementTitle.innerText = `Style ${typeDescription.toUpperCase()}`
                showElementDescription.innerText = `${description[typeDescription]}`

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