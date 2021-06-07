import { Router } from '@angular/router';
import { emailPasswordValidator } from './email-pass.validator';
import { ConfirmPassValidator } from './confirm-pass.validador';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewUser } from './novo-user';
import { CadastroService } from './cadastro.service';
import { LowerCaseValidator, SenhaValidator } from 'src/app/shared/validators/form.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'ap-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ UserNotTakenValidatorService ]
})

export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
      private router: Router,
      private cadastroService: CadastroService,
      private alertService: AlertService
      ) {}

  ngOnInit(): void {
      const ValidadorAssincrono = this.userNotTakenValidatorService.checkEmailTaken();

      this.cadastroForm = this.formBuilder.group( {
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      telefone: [[''], [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email, LowerCaseValidator], ValidadorAssincrono],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), SenhaValidator]],
      confirmaSenha: ['', [Validators.required]]

    }, {
      validator: [emailPasswordValidator, ConfirmPassValidator]
    });

  }

  cadastro() {
    if(this.cadastroForm.valid && !this.cadastroForm.pending) {
      const newUser = this.cadastroForm.getRawValue() as NewUser;
      this.cadastroService.Cadastro(newUser)
      .subscribe(() => {
        this.cadastroForm.disable();
        this.alertService.success('Você foi cadastrado com sucesso!');
        setTimeout(() => this.router.navigate(['forum-login']), 3000)
    },
      err => console.log(err)
      );
    }
  }
}

