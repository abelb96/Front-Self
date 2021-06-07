import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../../shared/components/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  fromUrl: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ativadordeRota: ActivatedRoute,
    private alert: AlertService,
    private userService: UserService
    ){}

  ngOnInit(): void {
    this.ativadordeRota.queryParams.subscribe(params => this.fromUrl = params.fromUrl);

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  login() {
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;
    const nome = this.userService.getUserName();
    this.authService.authenticate(email, senha).subscribe(() => {
      if(nome){
        this.router.navigate(['forum', nome])
      } else {
        this.router.navigate(['forum'])
      }
    },
    err => {
        console.log(err);
        this.loginForm.reset({
          email
        })
        this.alert.danger('Email ou Senha inválidos');
    });
  }
}
