# Proyecto: Registro de Usuarios con HTML, CSS, JavaScript y ExpressJS

Este proyecto es una aplicación web full-stack simple que permite registrar usuarios mediante un formulario. Los datos se almacenan en una base de datos MongoDB a través de un backend construido con ExpressJS.

---

## Estructura del Proyecto

```
mi-app/
│
├── backend/            # Código del servidor (Node.js + Express)
│   ├── server.js       # Punto de entrada del backend
│   ├── routes/         # Rutas para el manejo de usuarios
│   │   └── users.js    # Ruta POST para registrar usuarios
│   ├── models/         # Modelos de MongoDB
│   │   └── User.js     # Esquema de usuario
│   └── .env            # Variables de entorno (MongoDB URI)
│
├── frontend/           # Código del cliente
│   ├── index.html      # Página principal con formulario
│   ├── styles.css      # Estilos básicos
│   └── app.js          # Lógica para enviar datos al backend
│
├── package.json        # Dependencias del proyecto
└── README.md           # Documentación del proyecto
```

---

## Instalación

### 1. Clona el repositorio
```bash
git clone https://github.com/davidriveraarbelaez/Optativa_1.git
cd mi-app
```

### 2. Instala dependencias
```bash
cd backend
npm install
```

### 3. Configura variables de entorno
Crea un archivo `.env` en la carpeta `backend` y coloca tu URI de MongoDB:
```
MONGO_URI=mongodb://localhost:27017/registro_usuarios
```

---

## Ejecución del Proyecto

### Backend (ExpressJS)
```bash
cd backend
node server.js
```

Deberías ver:
```
MongoDB conectado
Servidor corriendo en http://localhost:3000
```

### Frontend
Abre el archivo `frontend/index.html` directamente en tu navegador.

---

## Pruebas de Funcionamiento

1. Completa el formulario en la página.
2. Haz clic en "Registrar".
3. Verifica que aparezca un mensaje de éxito.
4. Revisa tu base de datos MongoDB para confirmar que el usuario fue creado correctamente.

---

## Tecnologías utilizadas

- HTML, CSS, JavaScript (Frontend)
- Node.js, ExpressJS (Backend)
- MongoDB (Base de Datos)
- Dependencias:
    - dotenv: Para manejar variables de entorno.
    - mongoose: Para interactuar con MongoDB.
    - cors: Para permitir solicitudes entre dominios.
    - express: Framework para Node.js.
