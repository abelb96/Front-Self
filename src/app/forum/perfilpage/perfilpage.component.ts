import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './perfilpage.component.html'
})


export class PerfilPageComponent{
  @Input() Titulo: any = 'Perfil'
}
