import { AlertService } from './../../../shared/components/alert/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from '../../homeforum/topicos/topicos.service';

@Component({
  selector: 'f-mytop',
  templateUrl: './mytop.component.html',
  styleUrls: ['./mytop.component.css']
})
export class MyTopComponent implements OnInit{
  @Input() topicos: any;
  @Input() likes: any;
  curtiu:boolean = false;
  idUser: any;
  constructor(private topicoService: TopicosService, private ativadorDeRota: ActivatedRoute, private router: Router,
    private alertService: AlertService
    ) {}

   ngOnInit() {
    this.ativadorDeRota.params.subscribe(params => {
      this.idUser = params.id
    })

    this.topicoService.PegaTopicoUser().forEach(dados => {
      if(dados == 0) return this.alertService.danger('Parece que você ainda não tem tópicos :(', true)
      this.topicos = dados;
     })
  }


  perfil(perfilId: number){
     this.router.navigate(['/forum/perfil', perfilId])
  }
}


