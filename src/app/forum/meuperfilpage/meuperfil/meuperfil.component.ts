import { AlertService } from './../../../shared/components/alert/alert.service';
import { UserService } from './../../core/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicosService } from './../../homeforum/topicos/topicos.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'f-meuperfil',
  templateUrl: './meuperfil.component.html',
  styleUrls: ['./meuperfil.component.css']
})


export class MeuPerfilComponent implements OnInit{
  @Input() perfil: any;
  editaForm: FormGroup;

  constructor(private topicoService: TopicosService,
    private userService: UserService, private route: Router,
    private ativadorRotas: ActivatedRoute, private formBuilder: FormBuilder,
    private alertService: AlertService) {}

 ngOnInit() {

    this.topicoService.perfilUsuario(this.userService.getUserId()).forEach(dados => {
      this.perfil = dados[0]
      this.upForm(dados[0])
      this.ativadorRotas.params.subscribe(params => {
         if(this.userService.getUserId() != params.id) return this.route.navigateByUrl('forum/')
      })
    })

    this.editaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })

 }

 upForm(form) {
  this.editaForm.patchValue({
    nome: form.nome,
    sobrenome: form.sobrenome,
    telefone: form.telefone
  })
 }

  edita(){
      console.log(this.editaForm.valid)
    if(this.editaForm.valid && !this.editaForm.pending) {
      const newUser = this.editaForm.getRawValue();
      const userId = this.userService.getUserId();
      this.userService.edita(userId, newUser).subscribe(() => {
        this.editaForm.disable();
        this.alertService.success('Perfil editado com sucesso')
        setTimeout(() => this.route.navigate([`forum/`]), 3000)
      },
      err => console.log(err))
    }
  }
}


