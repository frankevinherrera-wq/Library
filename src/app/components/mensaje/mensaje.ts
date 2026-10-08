import { Component , input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mensaje',
  styleUrl: './mensaje.css',
  templateUrl: './mensaje.html',
})
export class Mensaje {


  Texto = input<string>("name");
  Url : string = "goglee.com";
  Tar : string = "_Black"


}
