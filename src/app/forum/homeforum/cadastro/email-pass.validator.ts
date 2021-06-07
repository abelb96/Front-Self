import { ValidatorFn, FormGroup } from '@angular/forms';

export const emailPasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
  const userName = formGroup.get('email').value;
  const password = formGroup.get('senha').value;

    if(userName.trim() + password.trim()) {
      return userName != password ? null : { emailPassword: true}
    } else {
      return null;
    }
}
