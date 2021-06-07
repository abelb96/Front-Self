import { SenhaValidator } from 'src/app/shared/validators/form.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from '../cadastro/cadastro.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ConfirmPassValidator } from '../cadastro/confirm-pass.validador';
import jwt_decode from 'jwt-decode'


@Component({
  templateUrl: './muda-senha.component.html',
  styleUrls: ['./muda-senha.component.css']
})
export class MudaSenhaComponent implements OnInit{
  mudasenhaForm: FormGroup;
  token;
  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private cadastroService: CadastroService,
      private alertService: AlertService,
      private ativadorRotas: ActivatedRoute
      ) {}

  ngOnInit(): void {
      this.ativadorRotas.url.subscribe(url => {
        this.token = url[1].path
        if(this.token.length < 137) return this.router.navigate(['forum-login']);
        const tok:any = jwt_decode(this.token);
        const tempoToken = tok.exp * 1000;
        const tempoagora = new Date(Date.now());
        const vencimentoToken = new Date(tempoToken);
        if(tempoagora >= vencimentoToken) {
          this.alertService.danger('Seu token é inválido! Faça um novo pedido de mudança de senha...');
          setTimeout(() => this.router.navigate(['forum-login']), 3000)
        }
      })
    this.mudasenhaForm = this.formBuilder.group({
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), SenhaValidator]],
      confirmaSenha: ['', [Validators.required]]
    }, {
      validator: [ConfirmPassValidator]
    });
  }

  esqueci() {
    if(this.mudasenhaForm.valid && !this.mudasenhaForm.pending) {
      const senha = this.mudasenhaForm.getRawValue();
     this.cadastroService.MudarSenha(this.token, senha)
      .subscribe(() => {
        this.mudasenhaForm.disable();
        this.alertService.success('Sua senha foi modificada com sucesso!');
        setTimeout(() => this.router.navigate(['forum-login']), 3000)

      },
      err => console.log(err)
      );
    }
  }
}
