import { debounceTime, map, filter, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';
import { TopicosService } from './../../topicos/topicos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'f-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  @Input() topicos;
  @Input() likes: any;
  campo = new FormControl();
  pesquisa: any;
  idUser: any;
  total: any;
  currentpage: number = 4;

  constructor(private topicoService: TopicosService, private ativadorDeRota: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.topicoService.getTopicos().forEach(dados => {
        this.total = dados
        this.topicos = dados
      })

    this.campo.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > -1),
      debounceTime(450),
      distinctUntilChanged(),
      ).subscribe(value => {
        if(value) {
          this.pesquisa = this.total.filter(
            topico => topico.titulo.toLowerCase().includes(value.toLowerCase()) ||
            topico.categoria.toLowerCase().includes(value.toLowerCase()))
        } else {
          this.pesquisa = false;
        }
      });

    this.ativadorDeRota.params.subscribe(params => {
      this.idUser = params.id
    })

  }

  perfil(perfilId: number){
     this.router.navigate(['/forum/perfil', perfilId])
  }

  likesTop(idTopico) {
    this.router.navigate(['/forum/perfil', idTopico])
  }

  subir() {
    window.scroll(0,0);
  }
}

