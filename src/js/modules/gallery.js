export function galleryScreen() {
    const gridItems = document.querySelectorAll('.grid__item');
    const widthViewport = window.innerWidth;


   if (widthViewport > 1024) {

       gridItems.forEach((item) => {
           item.addEventListener('click', () => {

               if (item.attributes.index.value === '2') {
                   gridItems.forEach((el) => {
                       if (el === item) {
                           el.style.width= '50%';

                           el.querySelector('.grid__extra-content').classList.remove('grid__extra-content_hidden');
                           el.querySelector('.grid__extra-content').classList.add('grid__extra-content_show');
                           if(el.querySelector('.grid__title_mid')){
                               el.querySelector('.grid__title_mid').classList.add('grid__title_active');
                               el.querySelector('.grid__title_mid').classList.remove('grid__title_hidden');
                           }
                       } else {
                           el.style.width= '25%'; // Остальные элементы
                       }
                   });
               } else {
                   gridItems.forEach((el) => {
                       el.querySelector('.grid__extra-content').classList.add('grid__extra-content_hidden');
                       el.querySelector('.grid__extra-content').classList.remove('grid__extra-content_show');
                       if(el.querySelector('.grid__title_mid')) {
                           el.querySelector('.grid__title_mid').classList.remove('grid__title_active');
                           el.querySelector('.grid__title_mid').classList.add('grid__title_hidden');
                       }
                       el.style.width= '33.33%';
                   });
               }
           });
       });
   }
   if (widthViewport <= 1024) {

       gridItems.forEach((item) => {
           item.addEventListener('click', () => {
               if (item.attributes.index.value === '2') {
                   gridItems.forEach((el) => {
                       if (el === item) {
                           el.style.height= '50%';

                           el.querySelector('.grid__extra-content').classList.remove('grid__extra-content_hidden');
                           el.querySelector('.grid__extra-content').classList.add('grid__extra-content_show');
                           if(el.querySelector('.grid__title_mid')){
                               el.querySelector('.grid__title_mid').classList.add('grid__title_active');
                               el.querySelector('.grid__title_mid').classList.remove('grid__title_hidden');
                           }
                       } else {
                           el.style.height= '25%';
                       }
                   });
               } else {
                   gridItems.forEach((el) => {
                       el.querySelector('.grid__extra-content').classList.add('grid__extra-content_hidden');
                       el.querySelector('.grid__extra-content').classList.remove('grid__extra-content_show');
                       if(el.querySelector('.grid__title_mid')) {
                           el.querySelector('.grid__title_mid').classList.remove('grid__title_active');
                           el.querySelector('.grid__title_mid').classList.add('grid__title_hidden');
                       }
                       el.style.height= '33.33%';
                   });
               }
           });
       });
   }
}