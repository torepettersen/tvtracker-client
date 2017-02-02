import {FormControl} from '@angular/forms'

export class SharedValidators {
  static email(c: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    
    return EMAIL_REGEXP.test(c.value) ? null : {
        invalidEmail: {
          valid: false
        }
      }
  }
}
