
import path from 'path';

/**
 * Vite плагин для замены <img> на <picture>, если <img> не вложен в <picture>.
 */
export default function replaceImgWithPicturePlugin() {
  return {
    name: 'vite-plugin-replace-img-with-picture',
    transformIndexHtml(html) {
      const imgTagRegex = /<img\s+([^>]*src=["'](.*?)(\.(png|jpe?g|gif))["'].*?)\s*>/gi;
      const pictureTagRegex = /<picture>.*?<img.*?<\/picture>/gis;

      // Найти все <img> внутри <picture>, чтобы исключить их из обработки
      const excludedImgs = [];
      html.replace(pictureTagRegex, (match) => {
        const imgMatch = match.match(imgTagRegex);
        if (imgMatch) {
          excludedImgs.push(...imgMatch);
        }
        return match;
      });

      return html.replace(imgTagRegex, (match, attributes, srcWithoutExt, extension) => {
        // Если тег <img> уже вложен в <picture>, пропустить его
        if (excludedImgs.includes(match)) {
          return match;
        }

        const imgDir = path.dirname(srcWithoutExt); // Каталог изображения
        const imgName = path.basename(srcWithoutExt, extension); // Имя файла без расширения

        // Генерация путей для разных форматов
        const avifSrc = `${imgDir}/${imgName}.avif`;
        const webpSrc = `${imgDir}/${imgName}.webp`;
        const originalSrc = `${imgDir}/${imgName}${extension}`;

        // Извлечение дополнительных атрибутов из <img>
        const otherAttributes = attributes.replace(/\s*src=["'].*?["']/, '').trim();

        return `
          <picture>
            <source srcset="${avifSrc}" type="image/avif">
            <source srcset="${webpSrc}" type="image/webp">
            <img src="${originalSrc}" ${otherAttributes}>
          </picture>
        `;
      });
    },
  };
}
