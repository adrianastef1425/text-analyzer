# Analizador de texto

Este proyecto consiste en una aplicación web que analiza el texto introducido por el usuario y proporciona información como el recuento de caracteres, palabras, números, entre otros.

## Archivos del Proyecto
- index.html:  Contiene la estructura HTML de la aplicación web.
- index.css: En este archivo se define el estilo visual de la aplicación web.
- index.js: Aquí se encuentra el código JavaScript que controla el comportamiento dinámico de la aplicación.
- analyzer.js: Este archivo contiene la lógica de la aplicación.

## Estilo Visual (index.css)
En el archivo index.css, se definen reglas CSS para dar estilo visual a los elementos de la aplicación, como el encabezado, el área de texto, y la lista de estadísticas. Se utilizan propiedades como color, background-color, margin, padding, entre otras, para dar formato a los elementos y mejorar la apariencia visual de la aplicación.

## Funcionalidad (index.js)
El archivo index.js contiene el código JavaScript que controla la funcionalidad de la aplicación. Se encarga de escuchar eventos del DOM, como la entrada de texto por parte del usuario, y llamar a los métodos del objeto analyzer para realizar el análisis correspondiente. Además, implementa la lógica para limpiar el área de texto y restablecer las estadísticas cuando se hace clic en el botón "Limpiar".

## Lógica (analyzer.js)
Este archivo consiste en una aplicación web que analiza el texto introducido por el usuario y proporciona información.
Se define un objeto analyzer con varios métodos que realizan diferentes tipos de análisis de texto, tales como:
- Conteo de palabras (getWordCount): Esta función devuelve la cantidad de palabras que el usuario proporcionó.
- Conteo de numero (getCharacterCount): Esta función devuelve la cantidad de caracteres que el usuario proporcionó.
- Conteo de caracteres sin espacios (getCharacterCountExcludingSpaces): Esta función devuelve la cantidad de caracteres sin incluir espacios, ni signos de puntuación.
- Promedio de tamaño de palabas (getAverageWordLength):Esta función devuelve la cantidad de caracteres que hay en todas las palabras ingresadas y las divide entra la cantidad de palabras.
- Conteo de números (getNumberCount): Esta función devuelve la cantidad de números enteros y decimales que se encuentran en el texto que el usuario ingresa.
- Suma de números (getNumberSum): Esta función devuelve la suma de números enteros y decimales.

Autoría
Este proyecto fue creado por Adriana.

¡Gracias por utilizar el Analizador de Texto!  ¡Disfruta de la aplicación! 🚀🤖👾👽