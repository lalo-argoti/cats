# 🐱 Proyecto Gatos - Full Stack (Angular + Express + MongoDB)

```
📁 xpertgroup
├── backend
│   ├── src
│   │   ├── controllers        # Lógica del controlador por entidad (gatos, usuarios, imágenes)
│   │   ├── services           # Casos de uso / lógica de negocio
│   │   ├── models             # Esquemas de Mongoose y DTOs
│   │   ├── repositories       # Acceso a datos, integraciones externas (TheCatAPI)
│   │   ├── middlewares        # Autenticación, manejo de errores, validaciones
│   │   ├── routes             # Definición de endpoints de Express
│   │   ├── utils              # Funciones auxiliares
│   │   ├── tests              # Pruebas unitarias y de integración
│   │   └── app.ts             # Punto de entrada Express, configuración de middleware y rutas
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── gatosrazas/                # Componente para ver razas
│   │   │   │   └── gatosrazas.component.ts/html/css
│   │   │   ├── gatosbuscar/               # Componente de búsqueda
│   │   │   │   └── gatosbuscar.component.ts/html/css
│   │   │   ├── usuario-login/             # Login de usuario
│   │   │   │   └── usuario-login.component.ts/html/css
│   │   │   ├── usuario-register/          # Registro de usuario
│   │   │   │   └── usuario-register.component.ts/html/css
│   │   │   ├── usuario-detalles/          # Perfil de usuario
│   │   │   │   └── usuario-detalles.component.ts/html/css
│   │   │   ├── services                   # Servicios Angular (HTTP, tokens)
│   │   │   ├── models                     # Interfaces TypeScript
│   │   │   ├── modules                    # AppModule y submódulos
│   │   │   ├── routing                    # Rutas de Angular (app-routing.module.ts)
│   │   │   └── shared                     # Componentes o pipes reutilizables
│   │   ├── assets                         # Recursos estáticos
│   │   ├── environments                   # environments.ts y environments.prod.ts
│   │   └── index.html                     # Entrada principal de la app Angular
│   ├── angular.json
│   ├── tsconfig.json
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml                     # Opcional, si decides contenerizar backend y frontend
├── README.md                              # Documentación del proyecto
└── .gitignore
```

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


Este proyecto permite explorar razas de gatos, consultar detalles de cada una y gestionar usuarios con autenticación básica. Está dividido en dos carpetas principales:

- `/frontend` → Angular
- `/backend` → Express.js + MongoDB

---

## 🔧 Requisitos

Asegúrate de tener instalados:

- Node.js (v18 o superior recomendado)
- npm
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB (local o Atlas)

---

## ▶️ Instrucciones de uso

---

## 🖥️ Backend (`/backend`)

### 📦 Instalación

```bash
cd backend
npm install
```

⚙️ Compilación de TypeScript

```
npx tsc
```
Esto generará la carpeta dist/.
🚀 Ejecución

```
node dist/app.js
```
✅ Alternativa para desarrollo con reinicio automático:

```
npx nodemon src/index.ts
```
    Usa ts-node para evitar compilar manualmente en desarrollo.

🌐 Endpoints disponibles
```
    GET /usuarios/ – Info general

    POST /usuarios/login – Login de usuario

    POST /usuarios/registro – Registro de usuario

    GET /usuarios/perfil/:id – Perfil por ID

    GET /gatos/breeds – Todas las razas

    GET /gatos/breeds/:id – Detalle de raza

    GET /admin/estado – Estado del sistema

    GET /admin/ping – Estado de MongoDB
```
    Asegúrate de tener MongoDB corriendo antes de lanzar el backend.

🌐 Frontend (/frontend)
📦 Instalación
```
cd frontend
npm install
```
🚀 Ejecutar en modo desarrollo
```
ng serve
```
Luego abre tu navegador en: http://localhost:4200
🧪 Testing

# Instala Jest si no lo tienes

```
npm install --save-dev jest ts-jest @types/jest supertest
```
# Ejecuta pruebas

```
npm run test
```
Y en package.json puedes añadir:

```
"scripts": {
  "test": "jest --passWithNoTests"
}
```
En esta versión inicial  se han agregado pruebas automatizadas.
📁 Estructura 

```
/backend
  ├── src/
  │   ├── routes/
  │   ├── models/
  │   ├── controllers/
  │   └── app.ts
  ├── tsconfig.json
  └── package.json

/frontend
  ├── src/app/
  │   ├── gatosrazas/
  │   ├── gatosbuscar/
  │   ├── usuarios/
  │   └── app.component.ts
  └── angular.json
```
✨ Autor

Desarrollado por Carlos Argoti para Xpertgroup.
Contacto o soporte: [carlos.e.argoti@gmail.com]
