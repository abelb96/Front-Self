import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from './../../homeforum/topicos/topicos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'f-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent implements OnInit{
  constructor(private topicoService: TopicosService, private route: Router, private ativadorRotas: ActivatedRoute) {}
  @Input() Titulo: any = 'Tópicos Recentes'
  @Input() perfil: any;
  idUser: any;

 ngOnInit() {
  this.ativadorRotas.params.subscribe(params => {
    this.idUser = params.id
  })
    this.topicoService.perfilUsuario(this.idUser).forEach(dados => {
      if(dados == 0) return this.route.navigateByUrl('forum/')
      this.perfil = dados
    })
  }
}
