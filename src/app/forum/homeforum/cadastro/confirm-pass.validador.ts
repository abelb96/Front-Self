import { FormGroup, ValidatorFn } from '@angular/forms';

export const ConfirmPassValidator: ValidatorFn = (formGroup: FormGroup) => {
  const senha = formGroup.get('senha').value;
  const confirmaSenha = formGroup.get('confirmaSenha').value;

    if(senha.trim() + confirmaSenha.trim()) {
      return senha != confirmaSenha ? { confirmaPass: true } : null;
    } else {
      return null;
    }
}
