import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gatos-razas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],

  styleUrls: ['./gatosrazas.component.css'],
  templateUrl: './gatosrazas.component.html'
})
export class GatosrazasComponent {
  razas: any[] = [];
  imagenes: string[] = []; // ✅ ESTA LÍNEA FALTABA
  indiceActual = 0;
  razaSeleccionada: any = null;
  cargando = false;
  bandera = "Aún no hay consultas";
  razaSeleccionadaId: string = '';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
   
  ngOnInit(): void {
    this.cargarRazas(); // ✅ Esto hace que cargue al inicio
    

  // Escuchar parámetro id para cargar detalle
  this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.onRazaSeleccionada(id);
      // Actualiza índice y razaSeleccionadaId si quieres sincronizar carrusel y select
      const index = this.razas.findIndex(r => r.id === id);
      if (index !== -1) {
        this.indiceActual = index;
        this.razaSeleccionadaId = id;
      }
    }
  });
  }

cargarRazas() {
  this.cargando = true;
  this.http.get<any[]>('http://localhost:3000/gatos/breeds/').subscribe({
    next: (data) => {
      this.razas = data;
      this.imagenes = this.razas
        .map((r) => r.image?.url || r.image || '')
        .filter((url) => url !== '');
      this.cargando = false;
      this.bandera = `Se han consultado ${this.razas.length} razas.`;

      // Suscribirse a los parámetros SOLO después de cargar razas
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.onRazaSeleccionada(id);
          const index = this.razas.findIndex(r => r.id === id);
          if (index !== -1) {
            this.indiceActual = index;
            this.razaSeleccionadaId = id;
          }
        }
      });
    },
    error: (err) => {
      console.error('Error al cargar razas', err);
      this.cargando = false;
    }
  });
}

anterior() {
  this.indiceActual = this.indiceActual === 0 ? this.razas.length - 1 : this.indiceActual - 1;
  const raza = this.razas[this.indiceActual];
  this.razaSeleccionadaId = raza.id;
  this.onRazaSeleccionada(raza.id);
}

siguiente() {
  this.indiceActual = this.indiceActual === this.razas.length - 1 ? 0 : this.indiceActual + 1;
  const raza = this.razas[this.indiceActual];
  this.razaSeleccionadaId = raza.id;
  this.onRazaSeleccionada(raza.id);
}


  guacalError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x200?text=Sin+foto';
  }

onSelectRaza(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const id = selectElement.value;
  this.razaSeleccionadaId = id;

  // actualizar índice
  const index = this.razas.findIndex(r => r.id === id);
  if (index !== -1) {
    this.indiceActual = index;
  }

  this.onRazaSeleccionada(id);
}


  onRazaSeleccionada(id: string) {
    if (!id) {
      this.razaSeleccionada = null;
      return;
    }

    this.cargando = true;
    this.http.get<any>(`http://localhost:3000/gatos/breeds/${id}`).subscribe({
      next: data => {
        this.razaSeleccionada = data;
        this.cargando = false;
        this.bandera = `Se ha consultado la raza ${data.breed?.name || data.name}`;
      },
      error: error => {
        console.error('Error al cargar la raza:', error);
        this.cargando = false;
        this.bandera = 'Error al consultar la raza seleccionada';
      }
    });
  }
}
