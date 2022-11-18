/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}","./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  DEFAULT:'#fffff',
  theme: {
    extend: {},
  },
  plugins: [  require('flowbite/plugin')],
}
