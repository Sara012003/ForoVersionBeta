/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Incluye el archivo index.html en la raíz del proyecto
    './src/**/*.{html,js,css}', // Incluye todos los archivos HTML, JS y CSS en el directorio src y sus subdirectorios
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'italic'],
        'lora':['Lora' , 'italic']
    },
  },
},
  plugins: [],
}
