/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Dosya uzantılarını projene göre güncelle
  theme: {
    extend: {
      colors: {
        primary: "#4ED7F1", // İstediğin hex kodunu buraya yaz (bu Tailwind’in mavi-600 rengi)
      },
    },
    textColor:{
        Default:'white'
    }
  },
  plugins: [],
};
