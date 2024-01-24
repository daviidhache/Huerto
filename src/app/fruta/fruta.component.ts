import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css'
})
export class FrutaComponent {
imagen:string = ""
img: Imagen={
  url: ""
}


constructor(public servicio: ServicioService){
  
    this.servicio.datoCompartido$.subscribe((dato) => {
      this.imagen = 'https://www.randomlists.com/img/fruits/' + dato +'.webp'
      this.img.url = this.imagen
    });



}
evento() {
  const nuevaImagen: Imagen = { url: this.img.url };
  this.servicio.setArray(nuevaImagen)
   
 }
} 