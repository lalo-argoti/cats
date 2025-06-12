import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-usuario-register',
  standalone: true,
  templateUrl: './usuario-register.component.html',
  styleUrls: ['./usuario-register.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class UsuarioRegisterComponent {
  usuario: string = '';
  nombres: string = '';
  correo: string = '';
  password: string = '';
  repassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  get passwordMismatch(): boolean {
    return this.password !== this.repassword;
  }

  onSubmit() {
    if (this.passwordMismatch) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.authService.register({
      usuario: this.usuario,
      nombres: this.nombres,
      correo: this.correo,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Error al registrar el usuario. Intenta más tarde.';
      }
    });
  }
}
