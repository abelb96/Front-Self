import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './respage.component.html'
})
export class ResPageComponent{
  @Input() Titulo: any = 'Responder Tópico'
}
