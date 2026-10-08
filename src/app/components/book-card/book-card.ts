import { Component, input, output } from '@angular/core';
import {Book} from '../../services/models/book'

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
})
export class BookCard {
  book = input.required<Book>();
  deleteClicked = output<Book>();
}
