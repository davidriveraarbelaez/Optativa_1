# Crear un nuevo proyecto con React y Vite

1. Abre una terminal y navega hasta el directorio donde deseas crear tu nuevo proyecto.

```bash
npm create vite@latest primera_aplicacion --template react
```
    En caso de desplegarse un menú con opciones, selecciona la opción `react` para crear un proyecto con React. Adicionalmente, elegir JavaScript.

2. Cambia al directorio del proyecto:

```bash
cd primera_aplicacion
```

3. Instala las dependencias:

```bash
npm install
```
4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre tu navegador y visita `http://localhost:5173` para ver tu aplicación en funcionamiento.


## Conceptos clave

- Componentes.
Los componentes son la base de una aplicación React. Un componente es una función o clase que devuelve un fragmento de código JSX. Los componentes pueden ser reutilizados en diferentes partes de la aplicación.

- JSX.
JSX es una extensión de sintaxis para JavaScript que permite escribir código HTML dentro de JavaScript. JSX se transpila a código JavaScript puro antes de ser ejecutado en el navegador.

- Props.
Las props son propiedades que se pasan a los componentes de React. Las props permiten que los componentes sean dinámicos y reutilizables. Se pueden pasar datos de un componente padre a un componente hijo.

- Estado.
El estado es un objeto que representa la información de un componente en un momento dado. El estado se puede modificar a lo largo del tiempo, lo que permite que los componentes sean dinámicos y reactivos. En React, el estado se gestiona mediante el hook `useState`.

- Ciclo de vida.
El ciclo de vida de un componente se refiere a las diferentes etapas por las que pasa un componente desde su creación hasta su eliminación. React proporciona varios métodos del ciclo de vida que permiten ejecutar código en diferentes momentos del ciclo de vida de un componente.

- Hooks.
Los hooks son funciones que permiten a los componentes de React gestionar el estado y el ciclo de vida de manera más sencilla y legible. Algunos hooks comunes son `useState`, `useEffect` y `useContext`.  

### Crear un componente

1. Crea un nuevo archivo llamado `MiComponente.jsx` en la carpeta `src` de tu proyecto.

```jsx
import React from 'react';

const MiComponente = () => {
    return (
        <div>
            <h1>Hola, soy un componente de React</h1>
        </div>
    );
};

export default MiComponente;
```
2. Importa y utiliza el componente en `App.jsx`:

```jsx
import MiComponente from './componentes/MiComponente'
import './App.css'

function App() {

  return (
    <div>
      <MiComponente />
    </div>
  )
}

export default App
```
3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

### Crear un componente con props

1. Crear el archivo `MiComponenteProps.jsx` para aceptar props:

```jsx
import React from 'react';
const MiComponenteProps = ({ nombre }) => {
    return (
        <div>
            <h1>Hola, soy un componente de React</h1>
            <p>Mi nombre es: {nombre}</p>
        </div>
    );
};
export default MiComponenteProps;
```

2. Importa y utiliza el componente en `App.jsx`:

```jsx
import MiComponenteProps from './componentes/MiComponenteProps'
import './App.css'
function App() {
  const nombre = 'Juan';
  return (
    <div>
      <MiComponenteProps nombre={nombre} />
    </div>
  )
}
export default App
```

3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.
### Crear un componente con estado
1. Crear el archivo `Contador.jsx` para manejar el estado:

```jsx
import React, { useState } from 'react';
const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
};
export default Contador;
```
2. Importa y utiliza el componente en `App.jsx`:

```jsx
import Contador from './componentes/Contador'
import './App.css'
function App() {
  return (
    <div>
      <Contador />
    </div>
  )
}
export default App
```

3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

### Crear un componente con efecto

1. Crear el archivo `MiComponenteEfecto.jsx` para manejar efectos secundarios:

```jsx  
import React, { useEffect } from 'react';

const MiComponenteEfecto = () => {
    useEffect(() => {
        // Código a ejecutar cuando el componente se monta
        console.log('Componente montado');

        return () => {
            // Código a ejecutar cuando el componente se desmonta
            console.log('Componente desmontado');
        };
    }, []);

    return (
        <div>
            <h1>Hola, soy un componente de React con efecto</h1>
        </div>
    );
};

export default MiComponenteEfecto;

```

2. Importa y utiliza el componente en `App.jsx`:

```jsx
import MiComponenteEfecto from './componentes/MiComponenteEfecto'
import './App.css'
function App() {
  return (
    <div>
      <MiComponenteEfecto />
    </div>
  )
}
export default App
```

3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.
### Crear un componente con contexto
1. Crear el archivo `MiContexto.jsx` para manejar el contexto:

```jsx

import React, { createContext, useContext, useState } from 'react';
const MiContexto = createContext();
const MiProveedor = ({ children }) => {
    const [valor, setValor] = useState('Hola desde el contexto');

    return (
        <MiContexto.Provider value={{ valor, setValor }}>
            {children}
        </MiContexto.Provider>
    );
};

export default MiProveedor; 
export { MiContexto };
```
2. Crear el archivo `MiComponenteContexto.jsx` para consumir el contexto:

```jsx
import React, { useContext } from 'react';
import { MiContexto } from './MiContexto';

const MiComponenteContexto = () => {
    const { valor, setValor } = useContext(MiContexto);

    return (
        <div>
            <h1>Hola, soy un componente de React con contexto</h1>
            <p>Valor del contexto: {valor}</p>
            <button onClick={() => setValor('Nuevo valor desde el contexto')}>
                Cambiar valor
            </button>
        </div>
    );
};

export default MiComponenteContexto;
```
3. Importa y utiliza el componente en `App.jsx`:

```jsx
import MiComponenteContexto from './componentes/MiComponenteContexto'
import MiProveedor from './componentes/MiContexto'
import './App.css'
function App() {
  return (
    <MiProveedor>
      <MiComponenteContexto />
    </MiProveedor>
  )
}
export default App
```

4. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

### Crear un componente con estilos
1. Crear el archivo `MiComponenteEstilos.jsx` para manejar estilos:

```jsx
import React from 'react';
import './MiComponenteEstilos.css';

const MiComponenteEstilos = () => {
    return (
        <div className="mi-componente-estilos">
            <h1>Hola, soy un componente de React con estilos</h1>
            <p>Este es un párrafo con estilos.</p>
        </div>
    );
};

export default MiComponenteEstilos;
```

2. Crear el archivo `MiComponenteEstilos.css` para definir los estilos:

```css
.mi-componente-estilos {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
}

.mi-componente-estilos h1 {
    color: #333;
}

.mi-componente-estilos p {
    font-size: 16px;
    color: #666;
}
```

3. Importa y utiliza el componente en `App.jsx`:

```jsx
import MiComponenteEstilos from './componentes/MiComponenteEstilos'
import './App.css'

function App() {
  return (
    <div>
      <MiComponenteEstilos />
    </div>
  )
}
export default App
```
4. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

### Crear un componente con rutas
1. Instala `react-router-dom`:

```bash
npm install react-router-dom
```

2. Crear el archivo `Rutas.jsx` para manejar las rutas:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import './Rutas.css';
const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};
export default Rutas;
```

3. Crear los componentes `Home.jsx`, `About.jsx` y `NotFound.jsx` para las diferentes rutas:

```jsx
// Home.jsx
import React from 'react';
const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la página de inicio</h1>
        </div>
    );
};
export default Home;
```

```jsx
// About.jsx
import React from 'react';
const About = () => {
    return (
        <div>
            <h1>Acerca de nosotros</h1>
        </div>
    );
};
export default About;
```

```jsx
// NotFound.jsx
import React from 'react';
const NotFound = () => {
    return (
        <div>
            <h1>Página no encontrada</h1>
        </div>
    );
};
export default NotFound;
```
4. Importa y utiliza el componente `Rutas` en `App.jsx`:

```jsx
import Rutas from './componentes/Rutas'
import './App.css'

function App() {
  return (
    <div>
      <Rutas />
    </div>
  )
}

export default App;
```
5. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.
### Crear un componente con formularios
1. Crear el archivo `Formulario.jsx` para manejar formularios:

```jsx  
import React, { useState } from 'react';
const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Email:', email);
    };

    return (
        <form onSubmit={manejarEnvio}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};
export default Formulario;
```
2. Importa y utiliza el componente en `App.jsx`:

```jsx
import Formulario from './componentes/Formulario'
import './App.css'
function App() {
  return (
    <div>
      <Formulario />
    </div>
  )
}

export default App
```
3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

### Crear un componente con API
1. Crear el archivo `Api.jsx` para manejar la API:

```jsx
import React, { useEffect, useState } from 'react';
const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Datos de la API</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default Api;
```

2. Importa y utiliza el componente en `App.jsx`:

```jsx
import Api from './componentes/Api'
import './App.css'
function App() {
  return (
    <div>
      <Api />
    </div>
  )
}

export default App
```

3. Guarda los cambios y observa cómo se actualiza la aplicación en el navegador.

