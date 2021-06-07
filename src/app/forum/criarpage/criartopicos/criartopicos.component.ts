import { criaTopico } from './criatopico';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TopicosService } from '../../homeforum/topicos/topicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'f-criatopico',
  templateUrl: './criartopicos.component.html',
  styleUrls: ['./criartopicos.component.css']
})
export class CriarTopicosComponent implements OnInit{
  criaTopico: FormGroup;
  @Input() categorias: any;
  constructor(private route: Router, private formBuilder: FormBuilder, private topicoService: TopicosService){}
      ngOnInit() {
       this.topicoService.ListaCategorias().forEach(data => {
        this.categorias = data;
      })

    this.criaTopico = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      categoria_id: ['', [Validators.required]],
      conteudo: ['', [Validators.required, Validators.minLength(124), Validators.maxLength(660)]]
    })
  }

  criatop() {
   if(this.criaTopico.valid && !this.criaTopico.pending) {
      const topico = this.criaTopico.getRawValue() as criaTopico;
      this.topicoService.CadastraTopico(topico).subscribe(() => this.route.navigate(['forum/']),
      err => console.log(err)
      );
    }
  }
}
