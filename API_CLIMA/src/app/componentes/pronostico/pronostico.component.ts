
import { Component } from '@angular/core';
import { ClimaService } from '../../servicios/clima.service';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent {
  limite: number = 6;
  ciudad: string = '';
  pronostico: any = null;
  error: string = '';

  constructor(private climaService: ClimaService) {}

  buscarPronostico() {
    this.error = '';
    if (this.ciudad.trim() !== '') {
      this.climaService.getForecast(this.ciudad)
        .subscribe({
          next: (data) => {
            this.pronostico = data;
          },
          error: (error) => {
            this.error = 'No se pudo obtener el pronóstico para la ciudad especificada.';
            console.error('Error fetching forecast:', error);
          },
          complete: () => {
            console.log('Solicitud de pronóstico completada');
          }
        });
    } else {
      this.error = 'Por favor ingresa el nombre de una ciudad.';
    }
  }
}
