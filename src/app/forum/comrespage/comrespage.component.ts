import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './comrespage.component.html'
})
export class ComResPageComponent{
  @Input() Titulo: any = 'Tópico'
}
