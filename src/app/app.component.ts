import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase1';
  nombre: string = 'Gaston';
  edad: number = 32;
  usuarios: Array<{ id: number; username: string; edad: number }> = [
    {
      id: 1,
      username: 'leo messi',
      edad: 34,
    },
    {
      id: 2,
      username: 'bob esponja',
      edad: 15,
    },
    {
      id: 3,
      username: 'gaston chatelet',
      edad: 32,
    },
    {
      id: 3,
      username: 'eloisa garcia',
      edad: 32,
    },
  ];
  usuariosMostrados: Array<{ id: number; username: string; edad: number }> =
    this.usuarios;
  empleadoBuscar: string = '';
  handlerInput(e: any) {
    this.empleadoBuscar = e.target.value;
  }
  submitButton() {
    console.log('click en el boton');
    this.usuariosMostrados = this.usuarios.filter((x) =>
      x.username.includes(this.empleadoBuscar)
    );
  }
}
