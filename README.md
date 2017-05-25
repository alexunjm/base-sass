# Boilerplate Frontend basado en Componentes

Boilerplate para el desarrollo de proyectos Frontend basado en Componentes Web con metalenguajes y automatización y optimización de tareas con Scripts NPM desarrollado por [@jonmircha](http://jonmircha.com).

Después de HTML5, los [componentes web](https://www.webcomponents.org/) son el siguiente gran salto en el paradigma del desarrollo web frontend, pero [aun no están listos](http://caniuse.com/#search=components), sin embargo con herramientas como Node, Scripts NPM, Sass, PostCSS, UnCSS, Pug, Babel, Browserify, entre algunos otros, podemos desarrollar proyectos con la filosofía de reutilización y componetización que proponen los componentes web, sin necesidad de usar frameworks y librerías robustas como [Angular](https://angular.io/), [React](https://facebook.github.io/react/), [Vue.js](https://vuejs.org/) o [Polymer](https://www.polymer-project.org/).

Además este Boilerplate tiene la filosofía de generar un sólo archivo **`CSS`** gracias a los **`imports`** de **`Sass`** y un sólo archivo **`JavaScript`** gracias a **`Browserify`**, adicionalmente con **`Babel`** puedes utilizar todas las características del estándar **`EcmaScript`** como los módulos (**`import`** y **`export`**).

## Para comenzar:

Sólo ejecuta los siguientes comandos:

* **`npm install`** Para instalar todas las dependencias
* **`npm start`** Para comenzar a trabajar
* **`npm run build`** Para publicar el proyecto

## Estructura de Boilerplate:

### Carpetas:

#### :file_folder: ***src***:

Es el directorio donde tendremos los archivos del proyecto en fase de desarrollo, y se estructura de la siguiente manera:

* :file_folder: ***img***: Contendrá las imágenes del proyecto sin optimizar
* :file_folder: ***js***: Contendrá los archivos JS que serán compilados con **`Babel`** y unificados con **`Browserify`**
  * :file_folder: ***components***: Contendrá los archivos de la programación JS de los componentes
  * :page_facing_up: **`index.js`**: Es el archivo principal JS del proyecto, en el que se podrá importar los componentes que se requieran de la carpeta ***components*** o de las dependencias que se tenga en ***node_modules***
* :file_folder: ***pug***: Contendrá los archivos **`.pug`** que compilarán a archivos HTML
  * :file_folder: ***includes***: Contendrá los archivos **`.pug`** que serán incluidos en algún otro archivo y que por tal, no serán compílados a HTML
    * :file_folder: ***components***: Contendrá los archivos de la estructura y contenido Pug de los componentes
    * :page_facing_up: **`layout.pug`**: Contiene la estructura básica de un documento HTML5
    * :page_facing_up: **`metatags_webapp.pug`**: Contiene los metatags mínimos y necesarios para convertir el proyecto en una WebApp
  * :file_folder: ***pages***: Contendrá los archivos **`.pug`** que serán compilados a HTML
* :file_folder: ***scss***: Contendrá los archivos **`.scss`** que compilarán a archivos CSS
  * :file_folder: ***components***: Contendrá los archivos **`partials`** de la presentación SCSS o CSS de los componentes
  * :file_folder: ***pages***: Contendrá los archivos **`partials`** **`.scss`** o **`.css`** de los estilos de cada una de las secciones del proyecto
  * :file_folder: ***vendors***: Contendrá los archivos **`partials`** **`.scss`** o **`.css`** de librerías de terceros que el proyecto ocupe
  * **`style.scss`**: Es el archivo principal SCSS del proyecto que compilara a CSS, en el que se podrá importar **`partials`** ***components***, ***pages*** o ***vendors***
* :file_folder: ***statics***: Contendrá todos los archivos estáticos del proyecto que no necesiten optimizarse o transformarse como videos, audios, **`.ico`**, **`.pdf`**, **`.xml`**, **`.txt`**, etc

#### :file_folder: ***public***:

Es el directorio donde tendremos la versión para publicar del proyecto con todos los archivos HTML generados, lás imágenes optimizadas y archivos estáticos requeridos, así como un sólo archivo CSS llamado **`style.css`** y un sólo archivo JS llamado **`script.js`** que contendrán toda la presentación y programación respectivamente

### Archivos:

* :page_facing_up: **`package.json`**: Contiene la configuración del proyecto, en el podrás ver todas las dependencias y los scripts NPM programados del Boilerplate
* :page_facing_up: **`.gitignore`**: Indica que archivos y directorios ignorará Git al momento de sincronizar el proyecto, la configuración que se propone ha sido generada en el sitio [gitignore.io](https://www.gitignore.io/) y es esta: [osx,node,macos,linux,windows,visualstudiocode](https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode) siéntete libre de modificarla a tus necesidades
* :page_facing_up: **`.editorconfig`**: Contiene la definición de la configuración para mantener la codificación estándar entre diferentes editores e IDEs
* :page_facing_up: **`.babelrc`**: Contiene la configuración de **`Babel`**
* :page_facing_up: **`statics.js`**: Contiene la programación necesaria para mover los archivos estáticos de la carpeta ***src*** a la carpeta ***public***
* :page_facing_up: **`uncss.json`**: Contiene la configuración del plugin **`uncss`** que puede ser modificada en base a las necesidades del proyecto
* :page_facing_up: **`README.md`**: Contiene la documentación del proyecto