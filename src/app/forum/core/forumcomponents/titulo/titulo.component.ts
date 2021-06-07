import { Component, Input } from '@angular/core';

@Component({
  selector: 'f-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent{
  @Input() titulo: any
}
