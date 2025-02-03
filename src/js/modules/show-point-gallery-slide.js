export function showPointGallerySlide() {

    document.querySelectorAll('.wave-point').forEach((point) => {

        point.addEventListener('click', (event) => {

            // Убираем класс у всех .wave-point__text
            document.querySelectorAll('.wave-point__text').forEach((el) => {
                el.classList.remove('wave-point__text_show');

            });

            // Добавляем класс только у кликнутого элемента
            const showElement = event.currentTarget.querySelector('.wave-point__text');

            if (showElement) {
                console.log(showElement)
                showElement.classList.add('wave-point__text_show');
            }
        });
    });
}
