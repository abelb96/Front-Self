import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { debounceTime, map, switchMap, first } from 'rxjs/operators'
import { CadastroService } from './cadastro.service';

@Injectable({providedIn: 'root'})

export class UserNotTakenValidatorService{

  constructor(private cadastroService: CadastroService) {}

  checkEmailTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(debounceTime(300)).pipe(switchMap(email =>
        this.cadastroService.ChecaSeTemEmail(email)
        ))
        .pipe(map(isTaken => isTaken ? { emailTaken: true } : null)).pipe(first());
    }
  }

  checkEmailExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(debounceTime(300)).pipe(switchMap(email =>
        this.cadastroService.ChecaSeTemEmail(email)
        ))
        .pipe(map(isTaken => isTaken ? null : { emailNaoExiste: true } )).pipe(first());
    }
  }

}
