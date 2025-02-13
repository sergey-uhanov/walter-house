import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import path, { resolve } from 'path';
import { convertImages } from './utils/convertImages';
import injectHTML from 'vite-plugin-html-inject';

const publicImagesDir = path.resolve(__dirname, 'public-src/');
const outputImagesDir = path.resolve(__dirname, 'images-con/');
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

            },
            output: {
                entryFileNames: 'js/[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name].[hash].css';
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
        outDir: './dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        cssCodeSplit: true,
    },
    plugins: [
        checker({
            // typescript: true,
        }),
        injectHTML(),
    ],
    envPrefix: 'APP_',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});