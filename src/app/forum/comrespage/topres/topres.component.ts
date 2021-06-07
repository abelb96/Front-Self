import { AlertService } from './../../../shared/components/alert/alert.service';
import { UserService } from './../../core/user/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from '../../homeforum/topicos/topicos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'f-topres',
  templateUrl: './topres.component.html',
  styleUrls: ['./topres.component.css']
})
export class TopResComponent implements OnInit {
  @Input() topico: any;
  @Input() respostas: any;
  curtiu: any;
  idTopico: any;
  user$: Observable<any>
  constructor(private topicoService: TopicosService, private userService: UserService,
    private ativadorDeRota: ActivatedRoute, private router: Router,
    private alertService: AlertService){}
  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.ativadorDeRota.params.subscribe(params => {
      this.idTopico = params.id
    })

    this.topicoService.Topico(this.idTopico).forEach(data => {
      if(data == 0) return this.router.navigateByUrl('forum/')
      this.topico = data[0]
      console.log(this.topico)
    })

    this.topicoService.Respostas(this.idTopico).forEach(data => {
      this.respostas = data
    })

    this.topicoService.EhDonoLike(this.idTopico).forEach(data => {
      this.curtiu = data
    })
  }

  restop(topId) {
    this.router.navigate(['/forum/responder-topico', topId])
  }

  perfil(perfilId: number){
    this.router.navigate(['/forum/perfil', perfilId])
  }

  curtir(idtop) {
    if(this.curtiu != true) {
      const like = {curtirtopico: true}
      return this.topicoService.CurtirTop(idtop, like).subscribe(() => this.curtiu = true)
    } else {
      const like = {curtirtopico: false}
      return this.topicoService.DescurtirTop(idtop, like).subscribe(() => this.curtiu = false);
    }
  }

  excluirRes(idRes) {
    this.topicoService.excluiRes(idRes).subscribe(res => {
      this.alertService.success('Resposta Excluída com sucesso!', true);
      this.topicoService.Respostas(this.idTopico).forEach(data => {
        this.respostas = data
      })
    })
  }
}
