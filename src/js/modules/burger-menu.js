export function burgerMenu() {
    const burgerMenu = document.querySelector('.header__burger-button-wrapper');
    const popUp = document.querySelector('.pop-up');
    const popUpContainer = document.querySelector('.pop-up__content');
    const buttonMenu = document.querySelector('.header__burger-button');

    burgerMenu.addEventListener('click', (e) => {
        popUp.classList.toggle('pop-up_show');
        popUpContainer.classList.toggle('pop-up__content_show');
        buttonMenu.classList.toggle('header__burger-button_cross');

    })
}