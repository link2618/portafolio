import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
     // leer json
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      // console.log( resp );

    });
   }

   private cargarEquipo() {
      // leer json
      this.http.get('https://portafolio-a89e0.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo = resp;
        // console.log( resp );

      });
   }
}
