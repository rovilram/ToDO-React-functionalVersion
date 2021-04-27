# ToDo React List (Advanced Version) COMPONENTES FUNCIONALES

(https://todolistreactive.netlify.app/)

Desarrollar con React una aplicación frontend (sin capa de servidor ni base de datos) que cumpla los siguientes requisitos:

1- Mostrar una lista de tareas, cada una de ellas con texto y un checkbox para indicar si ha sido realizada o no.

2- Un campo de texto filtrador que limite las tareas que aparecen según lo que contenga (escrito por el usuario).

3- En cada tarea, al pinchar sobre ella o sobre el checkbox, alternará su estado entre "Realizada" (checkbox marcado y texto de la tarea tachada) o "No realizada" (checkbox desmarcado y texto de la tarea normal).

4- Añadir en cada tarea un botón de "Eliminar" que al pulsarlo destruirá la tarea.

5- Añadir a todo el listado un nuevo botón de "Nueva" tarea que mostrará una vista totalmente distinta, con un campo de texto para el texto de la tarea, y dos botones, uno para "Guardar" la tarea (que nacerá como "No realizada") y otro de "Volver" atrás.
Ambos botones llevarán al usuario al listado anterior, pero en el caso del primero se creará una tarea nueva, y en el caso del segundo, no.

6- Añadir en cada tarea un botón de "Editar" tarea, de manera que al pincharlo aparezca la misma vista de crear nueva tarea, solo que en el campo de texto, este estará prerrellenado con el texto de la tarea, y al pinchar en el botón de Guardar, no creará una nueva, sino que la actualizará.

7- Añadir un campo nuevo de "Prioridad" para todas las tareas, que será un select de dos opciones: Alta y Baja. Dicho campo será editable únicamente desde el listado, no desde la vista de Editar tarea. Toda tarea nueva nacerá con prioridad Baja.

8- En el listado, las tareas con prioridad Alta deben aparecer con fondo rojo y las de prioridad Baja con fondo verde.

9- En el listado, cuando el usuario cambie la prioridad de una tarea a Alta (es decir, siendo Baja previamente) el resto de tareas cambiarán a Baja (si no lo estaban ya).

FASE 2
1- Añadir mediante Context un estado logado/no logado, que permita al usuario realizar todas las operaciones anteriores si está logado, o solo lecturas, si no lo lo está.

1bis (opcional)- Añadir mediante Context el modo oscuro/claro mediante un botón que alterne entre ambos modos y que la aplicación reciba unos estilos u otros en función de dicho modo.

2- Añadir una nueva vista Login a la aplicación, que simule la autenticación del usuario, recogiendo un usuario y password por formulario, y en caso de ser correctos, actualizar el estado a logado.

3- Añadir un botón de Logout a la aplicación, solo visible en el estado logado, en todas las otras vistas que no sean la de Login.

4- Enrutar todas las vistas de la aplicación a endpoints coherentes (p.e.: /login, /taskLists, /newTask, /editTask/1)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
