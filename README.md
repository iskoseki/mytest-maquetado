# Requisitos

Asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x.x o superior)
- [pnpm](https://pnpm.io/) (si no está instalado, puedes instalarlo siguiendo las instrucciones [aquí](https://pnpm.io/installation))

1. **Clona el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd mytest-maquetado
   ```

2. **Instala las dependencias**:

  ```bash
    pnpm install
  ```

3. **Desarrollo: Inicia el servidor de desarrollo con hot reloading:**:

```bash
   pnpm run dev
```

4. **Construcción: Construye el proyecto para producción:**:

```bash
   pnpm run build
```

5. **Previsualización: Previsualiza la versión construida del proyecto.:**:

```bash
   pnpm run preview
```

## Ejercicio de maquetado web con React.js

En el siguiente vínculo vas a encontrar el diseño de una web hecho en Figma, en versión desktop y mobile:
https://www.figma.com/file/3DExY0CA1hF4kA87Bx2D75/Test-Maquetado?node-id=0%3A1

Accediendo con una cuenta podrás inspeccionar las especificaciones en el panel de la derecha, para poder ver datos de medidas, tipografías, colores, etc.

## Objetivo

El objetivo del ejercicio es maquetar el diseño usando React JS. Cuanto más fiel al diseño sea el resultado mejor.
Podés armarlo como te sea más cómodo, si preferís usar sass, less, o incluso algún framework o dependencia particular. Siempre aclarando si hace falta hacer alguna instalación adicional o correr algún comando específico para poder ver el resultado.

#### Evaluaremos:

* Fidelidad al diseño desktop y mobile
* Que el resultado sea responsive
* Código prolijo y semántico
* Convenciones en nombres de clases (ej BEM)

#### Puntos opcionales:

Cualquier detalle que le quieras agregar es bienvenido, pero opcional, aquí algunas sugerencias:

* Armar un menú desplegable para mobile.
* Hacer una funcionalidad de acordeón para los filtros para ocultar/mostrar cada atributo.
* Hacer que al seleccionar un atributo de los filtros se muestren solo algunos de los productos que correspondan.
* Agregar un selector o botones arriba a la derecha para cambiar la cantidad de columnas de la grilla de productos entre 2, 3 y 4 en desktop, ó 1 y 2 en mobile.
* Cargar los productos tomando info desde un archivo JSON externo.
* Desplegar el resultado en un host gratuito como Netlify, Vercel o Heroku.

## Pasos a seguir:

### Si te resulta cómodo usar git:

1. Hacer un fork del repositorio en tu cuenta.
2. Armar el código de la pantalla según el diseño.
3. Hacer push de tus cambios en el fork.
4. Crear un pull request en el repositorio original (git@bitbucket.org:glamit/test-maquetado.git).
5. Avisarnos que ya está listo el ejercicio por el mismo medio en que estábamos en contacto y enviar un link al pull request.

### Si preferís no usar git:

1. Descargarte este código inicial como .zip con la opción de Download Repository en el botón desplegable (...) de arriba a la derecha
2. Armar el código de la pantalla según el diseño.
3. Enviarnos un .zip con el código final por el mismo medio en que estábamos en contacto.
