import { FormControl, ValidatorFn , ValidationErrors } from '@angular/forms';
export class CouncoursValidators   {
    static checkDate(control: FormControl): ValidationErrors {

        const d1 = new Date(control.get('Concours_DateDebut').value);
        const d2 = new Date(control.get('Concours_DateCloture').value);
        if ( d1 > d2 ) {
            return null;
          }
          return null;
        }
}
