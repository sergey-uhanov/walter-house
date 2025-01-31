import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path, { resolve } from 'path';
import { convertImages } from './utils/convertImages';
import injectHTML from 'vite-plugin-html-inject';

const publicImagesDir = path.resolve(__dirname, 'public-src/images');
const outputImagesDir = path.resolve(__dirname, 'public-src/images');
convertImages(publicImagesDir, outputImagesDir);

export default defineConfig({
    base: './',
    css: {
        postcss: '/postcss.config.js',
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                home: resolve(__dirname, 'home.html'),
            },
            output: {
                entryFileNames: 'js/[name].js', // Имена файлов JavaScript без хэша
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name].[hash].css'; // CSS в отдельную папку
                    }
                    return 'assets/[name].[ext]'; // Остальные файлы
                },
            },
        },
        outDir: './dist',
        assetsDir: 'assets', // Папка для ресурсов (изображений, шрифтов и т.д.)
        emptyOutDir: true,
        cssCodeSplit: true,
    },
    plugins: [
        checker({
            // typescript: true,
        }),
        injectHTML(),
        viteStaticCopy({
            targets: [
                {
                    src: 'images-con/*',
                    dest: 'assets/images',
                },
                {
                    src: 'public-src/**/!(*.png|*.svg|*.jpeg|*.jpg)',
                    dest: 'assets',
                    flatten: false,
                },
            ],
        }),
    ],
    envPrefix: 'APP_',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});