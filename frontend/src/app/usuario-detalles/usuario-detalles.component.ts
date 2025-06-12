import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {
  usuario: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const idUser = localStorage.getItem('idUser');

    if (!idUser) {
      // Usuario por defecto (mock)
      this.usuario = {
        username: 'carlos',
        nombreCompleto: 'Carlos Eduardo Argoti Patiño',
        email: 'carlos.e.argoti@gmail.com',
        favoritos: [
          { nombre: 'Siames', url: '/gatos-razas/siam' },
          { nombre: 'American Hair Short', url: 'http://localhost:4200/gatos-razas/asho' },
          { nombre: 'Siberian', url: 'http://localhost:4200/gatos-razas/sibe' }
        ]
      };
      return;
    }

    const url = `http://localhost:3000/usuarios/perfil/${idUser}`;

    this.http.get(url).subscribe({
      next: (data: any) => {
        this.usuario = data;
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = 'Usuario no encontrado.';
        } else {
          this.errorMessage = 'Error al cargar los detalles del usuario.';
        }
      }
    });
  }
}
