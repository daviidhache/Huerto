import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Imagen } from './imagen';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  constructor(private cliente: HttpClient) { }

  // Se crea una variable que contendra el contenido compartido por los componentes
  public  datoCompartido = new BehaviorSubject<string>(''); // Puedes cambiar el tipo de dato según tus necesidades
  datoCompartido$ = this.datoCompartido.asObservable();

  public  array = new BehaviorSubject<Imagen>(new Imagen("")); // Puedes cambiar el tipo de dato según tus necesidades
  array$ = this.array.asObservable();




 

  setDatoCompartido(dato: string) {
    this.datoCompartido.next(dato);

    
  }

  setArray(img2: Imagen){
   
    this.array.next(img2)
    
    
  }

  


  


}
