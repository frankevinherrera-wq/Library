import { Component, input, output , signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
})
export class Contador {

  contador : number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
  

}
