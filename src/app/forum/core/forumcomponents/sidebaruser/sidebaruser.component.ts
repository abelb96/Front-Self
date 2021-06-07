import { TopicosService } from './../../../homeforum/topicos/topicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'f-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['sidebaruser.component.css']
})

export class SideBarUserComponent implements OnInit{
  photoForm: FormGroup;
  file: File;
  nome;
  preview: string;
  abre:boolean = false;
  user$: Observable<User>;
  constructor(private topicoService: TopicosService ,private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.user$ = userService.getUser();
    this.topicoService.perfilUsuario(this.userService.getUserId()).subscribe(data => {
      this.nome = data[0].nome
    })
  }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logout();

    this.router.navigate(['']);

  }

  Meu() {
    const id = this.userService.getUserId();
    this.router.navigate(['forum/meu-perfil', id]);
  }

  sidAbre() {

    this.abre = !this.abre;

  }
}
