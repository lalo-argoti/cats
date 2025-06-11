#!/bin/bash

# Crear componentes nuevos (standalone, sin tests, sin CSS ni HTML externos)
ng generate component gatosrazas --standalone --skip-tests --inline-template --inline-style
ng generate component gatosbuscar --standalone --skip-tests --inline-template --inline-style
ng generate component usuario-login --standalone --skip-tests --inline-template --inline-style
ng generate component usuario-register --standalone --skip-tests --inline-template --inline-style
ng generate component usuario-detalles --standalone --skip-tests --inline-template --inline-style

# Insertar "Hola mundo" en cada componente
echo "import { Component } from '@angular/core';

@Component({
  selector: 'app-gatos-razas',
  standalone: true,
  template: '<p>Hola mundo desde GatosrazasComponent</p>'
})
export class GatosrazasComponent {}" > src/app/gatosrazas/gatosrazas.component.ts

echo "import { Component } from '@angular/core';

@Component({
  selector: 'app-gatos-buscar',
  standalone: true,
  template: '<p>Hola mundo desde GatosbuscarComponent</p>'
})
export class GatosbuscarComponent {}" > src/app/gatosbuscar/gatosbuscar.component.ts

echo "import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-login',
  standalone: true,
  template: '<p>Hola mundo desde UsuarioLoginComponent</p>'
})
export class UsuarioLoginComponent {}" > src/app/usuario-login/usuario-login.component.ts

echo "import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-register',
  standalone: true,
  template: '<p>Hola mundo desde UsuarioRegisterComponent</p>'
})
export class UsuarioRegisterComponent {}" > src/app/usuario-register/usuario-register.component.ts

echo "import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-detalles',
  standalone: true,
  template: '<p>Hola mundo desde UsuarioDetallesComponent</p>'
})
export class UsuarioDetallesComponent {}" > src/app/usuario-detalles/usuario-detalles.component.ts
