import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './likespage.component.html'
})
export class LikesPageComponent{
  @Input() Titulo: any = 'Curtidas'
}
