export function showCardsMobile() {
    const toggleButton = document.querySelector('.cards-screen__cards-item_show-button')
    const showElements = document.querySelectorAll('.cards-screen__cards-item_hidden')


    toggleButton.addEventListener('click', () => {

        showElements.forEach(item => {


            item.classList.remove('cards-screen__cards-item_hidden')

        })
        document.querySelector('.cards-screen__cards-item_show-button').style.display = 'none'
    })


}