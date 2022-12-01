import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre = "David Galvis";
  PI = Math.PI;
  porcentaje=0.236;
  salario=1234.23;
  fecha=22; ;
}


