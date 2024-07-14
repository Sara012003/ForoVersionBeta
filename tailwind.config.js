/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './HTML/index.html', // Ruta al archivo index.html dentro de la carpeta HTML
    './HTML/Pomberito.html', // Ruta al otro archivo HTML dentro de la carpeta HTML
        './src/**/*.{html,js,css}', // Incluye todos los archivos HTML, JS y CSS en el directorio src y sus subdirectorios
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'italic'],
        'lora':['Lora' , 'italic'],
        'montserrat':['Montserrat' , 'bold'],
        

    },
  },
},
  plugins: [],
}
