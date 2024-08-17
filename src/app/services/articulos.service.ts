import { Injectable, signal } from '@angular/core';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  articulos = [
    {
      id: 1,
      nombre: "Smartphone XYZ",
      descripcion: "Último modelo con cámara de alta resolución",
      precio: 799.99,
      categoria: "Electrónica",
      marca: "TechCo",
      stock: 50,
      imagenUrl: "https://ejemplo.com/imagenes/smartphone-xyz.jpg"
    },
    {
      id: 2,
      nombre: "Zapatillas Runner Pro",
      descripcion: "Zapatillas de running con tecnología de amortiguación avanzada",
      precio: 129.99,
      categoria: "Deportes",
      marca: "SportFit",
      stock: 100,
      imagenUrl: "https://ejemplo.com/imagenes/zapatillas-runner-pro.jpg"
    },
    {
      id: 3,
      nombre: "Batidora de Mano Deluxe",
      descripcion: "Batidora potente con múltiples velocidades",
      precio: 49.99,
      categoria: "Hogar",
      marca: "HomePlus",
      stock: 30,
      imagenUrl: "https://ejemplo.com/imagenes/batidora-deluxe.jpg"
    },
    {
      id: 4,
      nombre: "Libro: 'El Arte de la Programación'",
      descripcion: "Guía completa para dominar el arte de la programación",
      precio: 39.99,
      categoria: "Libros",
      marca: "EditorialTech",
      stock: 200,
      imagenUrl: "https://ejemplo.com/imagenes/libro-programacion.jpg"
    },
    {
      id: 5,
      nombre: "Set de Jardinería Premium",
      descripcion: "Kit completo con herramientas de alta calidad para jardinería",
      precio: 89.99,
      categoria: "Jardín",
      marca: "GreenThumb",
      stock: 25,
      imagenUrl: "https://ejemplo.com/imagenes/set-jardineria.jpg"
    }
  ];
  productos$=signal<Articulo[]>(this.articulos)

}
