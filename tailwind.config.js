/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-porche': "url('/public/assets/img/bg-S24_0909.webp')",
        '911': "url('/public/assets/img/modelo911.avif')",
        'cayan':"url('/public/assets/img/modelocayan.avif')",
        'panamera':"url('/public/assets/img/modelopanamera.avif')",
        'macan':"url('/public/assets/img/modelomacan.avif')",
        '718':"url('/public/assets/img/modelo718.avif')",
        'taycan':"url('/public/assets/img/modelotaycarl.avif')",
        'model1':"url('/public/assets/img/model1.avif')",
        'model2':"url('/public/assets/img/model2.avif')",
        'model3':"url('/public/assets/img/model3.avif')",
      }),
    },
  },
  plugins: [],
  darkMode: false,
}

