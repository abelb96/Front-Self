import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './meuperfilpage.component.html'
})


export class MeuPerfilPageComponent{
  @Input() Titulo: any = 'Meu Perfil'
}
