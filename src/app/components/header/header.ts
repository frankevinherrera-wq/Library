import { Component } from '@angular/core';
import { output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  loginClicked = output<string>();
}
