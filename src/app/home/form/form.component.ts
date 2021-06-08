import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/forum/core/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  landingForm: FormGroup;
  @Input() horarios;
  gif: boolean = false;
  constructor(private formBuilder: FormBuilder, private alertService: AlertService, private route: Router, private userService: UserService) {}
  ngOnInit(): void {

    this.landingForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      metro: ['', [Validators.required]],
      msg: ['']
    })
  }

  Enviar(){
    const form = this.landingForm.getRawValue()
    this.userService.EnviaForm(form).subscribe(data => {
      this.landingForm.disable();
      this.alertService.success("Formulário enviado com sucesso!")
      this.gif = true;
      setTimeout(() => this.route.navigateByUrl('contato'), 3000)
    })
  }
}
