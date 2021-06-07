import { AbstractControl } from '@angular/forms';

export function LowerCaseValidator(Control: AbstractControl) {

    if(Control.value.trim() && !/^[a-z0-9_\-]+/g.test(Control.value)) return { lowerCase: true}

    return null;

}

export function SenhaValidator(Control: AbstractControl) {

    if(Control.value.trim() && !/[^a-zA-Z 0-9]+/g.test(Control.value)) return { senhaForte: true}

    return null;

}
