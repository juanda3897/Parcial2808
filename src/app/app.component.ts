import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string=''
  distancia:string=''
  cantidadlunas:string=''
  masa:string=''
  planetas: any=[
    {nombre:'Pluton', distancia:'10000KM', cantidadlunas:'2', masa:"56000kg"},
    {nombre:'Mercurio', distancia:'20000KM', cantidadlunas:'1', masa:"76000kg" },
    {nombre:'Marte', distancia:'30000KM', cantidadlunas:'2', masa:"86000kg"},
    {nombre:'Venus', distancia:'40000KM', cantidadlunas:'1', masa:"96000kg"}
]

  title = 'Parcial2808';
}
