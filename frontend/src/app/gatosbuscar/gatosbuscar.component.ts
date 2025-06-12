import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gatos-buscar',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './gatosbuscar.component.html',
  styleUrls: ['./gatosbuscar.component.css']
})
export class GatosbuscarComponent implements OnInit {
  razas: any[] = [];
  filtro: string = '';
  resultado: any[] = [];
  cargando = false;

constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.cargarRazas();
  }
  
  irADetalle(id: string) {
  this.router.navigate(['/gatos-razas', id]);  
}

  cargarRazas() {
    this.cargando = true;
    this.http.get<any[]>('http://localhost:3000/gatos/breeds/').subscribe({
      next: (data) => {
        this.razas = data;
        this.resultado = data; // por defecto mostrar todas
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar razas', error);
        this.cargando = false;
      }
    });
  }

  buscar() {
    const texto = this.filtro.toLowerCase().trim();
    if (!texto) {
      this.resultado = this.razas;
      return;
    }
    this.resultado = this.razas.filter(r => r.name.toLowerCase().includes(texto));
  }

  guacalError(event: any) {
    event.target.src = 'https://via.placeholder.com/100x80?text=Sin+foto';
  }
}
