import { UserNotTakenValidatorService } from './../cadastro/user-not-taken.validator.service';
import { LowerCaseValidator } from 'src/app/shared/validators/form.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro/cadastro.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';


@Component({
  templateUrl: './esqueci.component.html',
  styleUrls: ['./esqueci.component.css']
})
export class EsqueciComponent implements OnInit{
  esqueciForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private UserNotTakenValidatorService: UserNotTakenValidatorService,
      private router: Router,
      private cadastroService: CadastroService,
      private alertService: AlertService
      ) {}

  ngOnInit(): void {
    const ValidadorAssincrono = this.UserNotTakenValidatorService.checkEmailExiste();

    this.esqueciForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, LowerCaseValidator], ValidadorAssincrono]
    })
  }

  esqueci() {
    if(this.esqueciForm.valid && !this.esqueciForm.pending) {
      const email = this.esqueciForm.getRawValue();
      this.cadastroService.EsqueciSenha(email)
      .subscribe(() => {
        this.esqueciForm.disable();
        this.alertService.success('Foi enviado para o seu email um link para mudança de senha. Atenção, o link expira em 10 minutos...');
        setTimeout(() => this.router.navigate(['forum-login']), 3000)

      },
      err => console.log(err)
      );
    }
  }
}
