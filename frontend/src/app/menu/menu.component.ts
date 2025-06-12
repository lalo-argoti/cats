import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // si usas routerLink en plantilla
import { CommonModule } from '@angular/common'; // ✅ necesario para *ngFor y *ngIf
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-menu',
  standalone: true,  
  imports: [CommonModule, RouterModule], // ✅ agrega CommonModule
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
menuItems = [
  {
    title: 'Gatos',
    children: [
      { name: 'Explorar Razas', route: '/gatos-razas' },    // Componente: GatosrazasComponent
      { name: 'Buscar Razas', route: '/gatos-buscar' }      // Componente: GatosbuscarComponent
    ],
    expanded: false
  },
  {
    title: 'Usuarios',
    children: [
      { name: 'Iniciar Sesión', route: '/usuario-login' },      // UsuarioLoginComponent
      { name: 'Registrarse', route: '/usuario-registro' },      // UsuarioRegisterComponent
      { name: 'Perfil', route: '/usuario-detalles' }            // UsuarioDetallesComponent (protegido por guardia)
    ],
    expanded: false
  },
  {
    title: 'Admin',
    children: [
      { name: 'Estado del Sistema', route: '/admin/estado' },
      { name: 'Ping a MongoDB', route: '/admin/ping' }
    ],
    expanded: false
  }
];


  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
}

