import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiKey: string = '3c7fb26e5cffa3de47c13c7819621b15'; // Tu API Key de OpenWeatherMap
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5'; // URL base de la API

  constructor(private http: HttpClient) { }

  // Obtener clima actual por ciudad
  getCurrentWeather(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(`${this.apiUrl}/weather`, { params });
  }

  // Obtener pronóstico por ciudad
  getForecast(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(`${this.apiUrl}/forecast`, { params });
  }
}
