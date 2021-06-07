import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from '../../homeforum/topicos/topicos.service';

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
  constructor(private topicoService: TopicosService, private ativadorDeRota: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.ativadorDeRota.params.subscribe(params => {
      this.idTopico = params.id
    })

    this.topicoService.Topico(this.idTopico).forEach(data => {
      if(data == 0) return this.router.navigateByUrl('forum/')
      this.topico = data[0]
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
}
