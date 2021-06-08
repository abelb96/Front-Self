import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './userspage.component.html'
})

export class UsersPageComponent{
  @Input() Titulo: any = 'Usuarios'
}
