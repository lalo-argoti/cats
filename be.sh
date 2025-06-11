#!/bin/bash

mkdir -p backend/src
cd backend || exit

# package.json
cat > package.json <<EOF
{
  "name": "express-hola-mundo",
  "version": "1.0.0",
  "main": "dist/app.js",
  "scripts": {
    "start": "ts-node src/app.ts",
    "dev": "nodemon src/app.ts",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^2.0.22",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}
EOF

# tsconfig.json
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  }
}
EOF

# .gitignore
cat > .gitignore <<EOF
node_modules
dist
EOF

# src/app.ts
cat > src/app.ts <<EOF
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hola Mundo desde Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});
EOF

# Instalar dependencias
npm install

echo "Proyecto Express básico creado. Ejecuta 'npm run dev' dentro de backend para iniciar el servidor."
