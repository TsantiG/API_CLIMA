import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CiudadComponent } from './componentes/ciudad/ciudad.component';
import { ClimaService } from './servicios/clima.service';
import { PronosticoComponent } from './componentes/pronostico/pronostico.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    PronosticoComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ClimaService, provideHttpClient(withFetch())],

  bootstrap: [AppComponent]
})
export class AppModule { }
