import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './mytoppage.component.html'
})
export class MyTopPageComponent{
  @Input() Titulo: any = 'Meus Tópicos'
}
