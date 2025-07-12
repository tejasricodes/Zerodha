// postcss.config.js (or postcss.config.mjs)
import tailwindcss from '@tailwindcss/postcss'; // <-- UPDATED IMPORT
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss, // Use the imported plugin directly
    autoprefixer,
    // Add other PostCSS plugins here
  ],
};