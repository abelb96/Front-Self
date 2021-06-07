import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from '../../homeforum/topicos/topicos.service';

@Component({
  selector: 'f-restop',
  templateUrl: './restop.component.html',
  styleUrls: ['./restop.component.css']
})
export class ResTopComponent implements OnInit{
  @Input() titulo_topico;
  idTopico;
  criaRes: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router, private ativadorDeRota: ActivatedRoute, private topicoService: TopicosService){}
  ngOnInit() {
    this.idTopico = this.ativadorDeRota.url.subscribe(url => {
      this.idTopico = url[2].path

      this.topicoService.Topico(this.idTopico).forEach(data => {
        if(data == 0) return this.route.navigateByUrl('forum/')
        this.titulo_topico = data[0].titulo
      })
    })
    this.criaRes = this.formBuilder.group({
      resposta: ['', [Validators.required, Validators.minLength(107), Validators.maxLength(970)]]
    })
  }

  addRes() {
    if(this.criaRes.valid) {
      let idTopico;
      this.ativadorDeRota.url.subscribe(url => {
        idTopico = url[2].path
      });
       const resposta = this.criaRes.getRawValue();
       this.topicoService.Responde(idTopico, resposta).subscribe(() => this.route.navigate(['forum/topico/', idTopico]),
       err => console.log(err)
       );
     }
   }
}
