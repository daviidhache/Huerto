import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-terreno',
  templateUrl: './terreno.component.html',
  styleUrl: './terreno.component.css',
 
})
export class TerrenoComponent {
 
  MensajeEntradaFruta!:string
verificar: string = ""
imagen: string = ""
listaImagenes: Imagen[] = []
img: Imagen={
  url: ""
}
    

  constructor(public servicio:ServicioService){

    this.servicio.array.subscribe((imagen) =>{
      this.listaImagenes.push(imagen)
    })
  

}




 
 
   






buscar(){

  this.servicio.setDatoCompartido(this.MensajeEntradaFruta)
}


}
