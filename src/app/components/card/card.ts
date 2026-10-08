import { Component , input, signal} from '@angular/core';
import { CardHeader } from '../card-header/card-header';
import { CardBody } from '../card-body/card-body';
import { CardFooter } from '../card-footer/card-footer';
import { BookCard } from '../book-card/book-card';


@Component({
  imports: [CardHeader, CardHeader, CardBody, CardFooter],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  Header = input(true) ;
  Body = signal(true) ;
  Footer = signal(true) ;


}
