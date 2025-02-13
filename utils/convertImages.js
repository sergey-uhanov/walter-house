import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export const convertImages = (srcDir, destDir) => {
	// Создаём целевую директорию, если она не существует
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, { recursive: true });
	}

	// Считываем содержимое директории
	const items = fs.readdirSync(srcDir, { withFileTypes: true });

	items.forEach((item) => {
		const srcPath = path.join(srcDir, item.name);
		const destPath = path.join(destDir, item.name);

		if (item.isDirectory()) {
			// Если это папка, рекурсивно обрабатываем её
			convertImages(srcPath, destPath);
		} else {
			// Если это файл, проверяем расширение
			const ext = path.extname(item.name).toLowerCase();

			if (['.png', '.jpg', '.jpeg'].includes(ext)) {
				const destFilePath = path.join(destDir, `${path.basename(item.name, ext)}.webp`);
				sharp(srcPath)
					.webp({ quality: 75 })
					.toFile(destFilePath)
					.catch((err) => console.error(`Ошибка при конвертации ${item.name}:`, err));
			}
		}
	});
};
