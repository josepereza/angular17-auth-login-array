import { Component, inject, signal } from '@angular/core';
import { Articulo } from '../../interfaces/articulo';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {

  articulosService=inject(ArticulosService)
  

 
}
