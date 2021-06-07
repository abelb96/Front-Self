import { Component, Input, Output } from '@angular/core';

@Component({
  templateUrl: './fhome.component.html'
})
export class FhomeComponent {
  constructor() {

  }
  @Input() Titulo: any = 'Tópicos Recentes'

}
