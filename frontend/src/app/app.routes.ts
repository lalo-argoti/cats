import { Routes } from '@angular/router';

import { GatosrazasComponent } from './gatosrazas/gatosrazas.component';
import { GatosbuscarComponent } from './gatosbuscar/gatosbuscar.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';

export const routes: Routes = [
  { path: 'gatos-razas', component: GatosrazasComponent },
  { path: 'gatos-buscar', component: GatosbuscarComponent },
  { path: 'usuario-login', component: UsuarioLoginComponent },
  { path: 'usuario-registro', component: UsuarioRegisterComponent },
  { path: 'usuario-detalles', component: UsuarioDetallesComponent },
  
  { path: '', redirectTo: '/usuario-login', pathMatch: 'full' },
];
