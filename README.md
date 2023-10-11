# fullsatackEjercicio
Ejercicio de proyecto final

### FRONTEND

1. Primero debemos relaizar toda la instalacion de `REACT` con `VITE`, luego seguimos algunos pasos recomendados:

    - Eliminar los archivos:
        - App.css
        - App.jsx

2. Instalamos el framework para las rutas
    - `npm i react-router-dom`
    - Crear la constante router dentro de `main.jsx`
    - Borramos la linea de `apps.jsx`
    - Copiamoy pegamos las siguientes lieneas:
    ```js
    const router = createBrowserRouter([
    {
    path: "/",
     element: <Root />,
     },
    ]);
    ```
    - Siguiente en la parte de abajo
    ```js
    ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    );
    ```
    - Como importación
    ```js
    import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";
    ```
    