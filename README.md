# Boilerplate para el desarrollo de proyectos Frontend basado en Componentes Web con metalenguajes y automatización y optimización de tareas con Scripts NPM de @jonmircha

Después de HTML5, los [componentes web](https://www.webcomponents.org/) son el siguiente gran salto en el paradigma del desarrollo web frontend, pero [aun no están listos](http://caniuse.com/#search=components), sin embargo con herramientas como Node, Scripts NPM, Sass, PostCSS, UnCSS, Pug, Babel, Browserify, entre algunos otros, podemos desarrollar proyectos con la filosofía de reutilización y componetización que proponen los componentes web, sin necesidad de usar frameworks y librerías robustas como [Angular](https://angular.io/), [React](https://facebook.github.io/react/), [Vue.js](https://vuejs.org/) o [Polymer](https://www.polymer-project.org/)

## Estructura de Boilerplate:

* Carpetas:
  * ***src***: es el directorio donde tendremos los archivos del proyecto en fase de desarrollo, y se estructura de la siguiente manera:
    * ***img***: Contendrá las imágenes del proyecto sin optimizar
    * ***js***: Contendrá los archivos JS con programación ES6 o superior que serán compilados con **`Babel`** y unificados con **`Browserify`**
  	* ***pug***: Contendrá los archivos **`.pug`** que compilarán a archivos HTML
  	* ***scss***: Contendrá los archivos **`.scss`** que compilaran a archivos CSS
  	* ***statics***: Contendrá todos los archivos estáticos del proyecto que no necesiten optimizarse o transformarse como videos, audios, **`.ico`**, **`.pdf`**, **`.xml`**, **`.txt`**, etc
	* ***public***: es el directorio donde tendremos la versión para publicar del proyecto con todos los archivos HTML generados, lás imágenes optimizadas y archivos estáticos requeridos, así como un sólo archivo CSS (**`style.css`**) y JS (**`script.js`**) que contendrán toda la presentación y programación respectivamente
* Archivos:
	* ***package.json***: contiene la configuración del proyecto, en el podrás ver todas las dependencias y los scripts NPM programados del Boilerplate
	* ***.gitignore***: indica que archivos y directorios ignorará Git al momento de sincronizar el proyecto, la configuración que se propone es esta: [https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode](https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode)
	* ***babel.rc***: contiene la configuración con los presets básicos de **`Babel`**
	* ***statics.js***: contiene la programación necesaria para mover los archivos estáticos de la carpeta **src** a la carpeta **public**
	* ***uncss.json***: contiene la configuración del plugin **`uncss`**
	