import { Component,inject ,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Header} from  './components/header/header'
import {BookCard} from  './components/book-card/book-card'
import { Book } from './services/models/book';
import { BookService } from './services/book';
import { Mensaje } from './components/mensaje/mensaje';


import { Navbar } from './components/navbar/navbar';

import { Contador } from './components/contador/contador';
import { Card } from './components/card/card';
@Component({
  imports: [RouterOutlet , BookCard , Mensaje, Contador, Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('el signal');

  private bookService = inject(BookService);
  books = this.bookService.books;

  // onLoginClicked(action: string) {
  //     console.log(action);
  // }



  onDeleteBook(book: Book) {
    this.books = this.books.filter(
      c => c !== book
    );
  }



  // recibirMensaje(mensaje: string) {
  //   console.log(mensaje);
  // }

  // mensaje = '';

  // mostrarMensaje() {
  //   this.mensaje = '¡Producto comprado!';
  //   console.log(this.mensaje)
  // }
   


  // //padre a hijo
  // nombre = 'Fran';

  nombre = '';

  mostrarNombre() {
    this.nombre = 'Fran';
  }

}
