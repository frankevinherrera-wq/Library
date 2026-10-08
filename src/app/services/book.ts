import { Service } from '@angular/core';
import { Book } from './models/book';
@Service() //"La clase que viene debajo es un servicio que puede ser administrado por Angular."
export class BookService {
    books: Book[] = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      year: 2008
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      year: 1999
    },
    {
      title: 'Design Patterns',
      author: 'Erich Gamma',
      year: 1994
    }
  ];

}