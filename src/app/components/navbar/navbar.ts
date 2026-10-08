import { Component , input , output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  // mensaje = output<string>();

  // enviarMensaje() {
  //   this.mensaje.emit('Hola desde el hijo');
  // }

  //hijo a padre

  // comprado = output();
  // comprar() {
  //   this.comprado.emit();
  // }


  // //padre a hijo

  // nombre = input<string>();


  nombre = input<string>();
  mostrarNombre = output();


  mostrar() {
  this.mostrarNombre.emit();
}

}
