```
├── backend
│   ├── src
│   │   ├── controllers       # Controladores (gatos, imágenes)
│   │   ├── services          # Lógica de negocio / casos de uso
│   │   ├── models            # Modelos de datos (Mongoose schemas, DTOs)
│   │   ├── repositories      # Acceso a datos / integraciones (MongoDB, TheCatAPI)
│   │   ├── middlewares       # Middleware (autenticación, errores)
│   │   ├── routes            # Definición de rutas y routers
│   │   ├── utils             # Utilidades varias
│   │   ├── tests             # Pruebas unitarias e integración
│   │   └── app.ts            # Configuración principal Express
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json

---------------------------------------
 app/
    ├── gatosrazas/
    │   └── gatosrazas.component.ts
    ├── gatosbuscar/
    │   └── gatosbuscar.component.ts
    ├── usuario-login/
    │   └── usuario-login.component.ts
    ├── usuario-register/
    │   └── usuario-register.component.ts
    └── usuario-detalles/
        └── usuario-detalles.component.ts
------------------------------------------------
│   │   │   ├── services      # Servicios Angular (HTTP, lógica frontend)
│   │   │   ├── models        # Interfaces y modelos de datos
│   │   │   ├── modules       # Módulos Angular
│   │   │   ├── routing       # Configuración de rutas Angular
│   │   │   └── ...           # Otros archivos de Angular
│   │   ├── assets
│   │   ├── environments
│   │   └── index.html
│   ├── Dockerfile
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml
├── README.md
└── .gitignore
```
` 
#Backend
```
cd backend
npm run dev
```
#Frontend
```
cd frontend
npm ng serve --host 0.0.0.0 --port 4200
```
