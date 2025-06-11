```js
├── backend/
│ ├── src/
│ │ ├── controllers/ # Controladores (gatos, imágenes)
│ │ ├── services/ # Lógica de negocio / casos de uso
│ │ ├── models/ # Modelos de datos (Mongoose schemas, DTOs)
│ │ ├── repositories/ # Acceso a datos / integraciones (MongoDB, TheCatAPI)
│ │ ├── middlewares/ # Middleware (autenticación, errores)
│ │ ├── routes/ # Definición de rutas y routers
│ │ ├── utils/ # Utilidades varias
│ │ ├── tests/ # Pruebas unitarias e integración
│ │ └── app.ts # Configuración principal Express
│ ├── Dockerfile
│ ├── package.json
│ └── tsconfig.json
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Componentes Angular
│ │ │ ├── services/ # Servicios Angular (HTTP, lógica frontend)
│ │ │ ├── models/ # Interfaces y modelos de datos
│ │ │ ├── modules/ # Módulos Angular
│ │ │ ├── routing/ # Configuración de rutas Angular
│ │ │ └── ... # Otros archivos de Angular
│ │ ├── assets/
│ │ ├── environments/
│ │ └── index.html
│ ├── Dockerfile
│ ├── angular.json
│ ├── package.json
│ └── tsconfig.json
├── docker-compose.yml
├── README.md
└── .gitignore
```
