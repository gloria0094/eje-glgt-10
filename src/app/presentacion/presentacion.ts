import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-presentacion', //este es el que se mueve para enlace
  styleUrl: './presentacion.css',
  templateUrl: './presentacion.html',
})
//Tipescript - Java Script - Orientada a objetos ------La programación
export class Presentacion {
  // Atributos
  nombre: string = 'Gloria Gonzalez';
  carrera: string = 'Ingenieria en sistemas computacionales';
  semestre: number = 7;
  institución: string = 'UPIIZ-IPN';
  correo: string = 'ggonzalezt2201@alumno.ipn.mx';
  mensaje: string = 'Soy ingeniera en sistemas computacionales';
  
  habilidades: string[] = [
    'java',
    'Spring boot',
    'html',
    'java script',
    'angular',
    'c',
    'Base de datos'
  ];
  
  edad: number = 22;
  
  idiomas: string[] = [
    'Español', 'ingles'
  ];

  // Cambiado de 'misIntereses' a 'intereses' para que coincida con el HTML
  intereses: string[] = [
    'Leer', 'Videos', 'Cantar', 'Escuchar música'
  ];
  
  githubUrl = 'https://github.com/gloria0094/eje-glgt-10'; 
}
