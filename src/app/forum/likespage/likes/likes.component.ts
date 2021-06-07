import { AlertService } from './../../../shared/components/alert/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from '../../homeforum/topicos/topicos.service';

@Component({
  selector: 'f-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit{
  @Input() likes: any;
  idTop: any;
  constructor(private topicoService: TopicosService, private ativadorDeRota: ActivatedRoute, private router: Router,
    private alertService: AlertService
    ) {}

   ngOnInit() {
    this.ativadorDeRota.params.subscribe(params => {
      this.idTop = params.id
    })

    this.topicoService.PegaListaLikes(this.idTop).forEach(dados => {
      if(dados == 0) return this.alertService.danger('Que pena! Parece que esse tópico não tem nenhum like.')
      this.likes = dados;
     })
  }


  perfil(perfilId: number){
     this.router.navigate(['/forum/perfil', perfilId])
  }
}
