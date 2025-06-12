import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jugador-form',
  standalone: true,
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule]
})

export class JugadorFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('jwt', response.token);
        localStorage.setItem('idUser', response.IdUser);
        localStorage.setItem('username', response.Username);
        this.router.navigate(['/grafico']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Credenciales inválidas. Por favor verifica usuario y contraseña.';
        } else {
          this.errorMessage = 'Error inesperado. Intenta más tarde.';
        }
      }
    });
  }
}
