import { Component, Input } from '@angular/core';


@Component({
  templateUrl:'./criarpage.component.html'
})
export class CriarPageComponent{
  @Input() Titulo: any = 'Criar Tópico'
}
