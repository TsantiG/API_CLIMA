import { Component } from '@angular/core';
import { ClimaService } from '../../servicios/clima.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent {
  limite = 8;
  ciudad: string = '';
  climaActual: any;
  favoritos: Array<{ ciudad: string, temperatura: number, viento: number, humedad: number }> = [];
  error: string = '';

  constructor(private climaService: ClimaService) {}

  buscarClima() {
    this.error = '';
    if (this.ciudad.trim() !== '') {
      this.climaService.getCurrentWeather(this.ciudad)
        .subscribe({
          next: (data) => {
            this.climaActual = data;
          },
          error: (error) => {
            this.error = 'No se pudo obtener el clima para la ciudad especificada.';
            console.error('Error fetching weather:', error);
          },
          complete: () => {
            console.log('Solicitud de clima completada');
          }
        });
    } else {
      this.error = 'Por favor ingresa el nombre de una ciudad.';
    }
  }
  

  agregarAFavoritos() {
    if (this.climaActual) {
      const favorito = {
        ciudad: this.climaActual.name,
        temperatura: this.climaActual.main.temp,
        viento: this.climaActual.wind.speed,
        humedad: this.climaActual.main.humidity
      };
      this.favoritos.push(favorito);
    }
  }

  eliminarFavorito(index: number) {
    this.favoritos.splice(index, 1);
  }


}
