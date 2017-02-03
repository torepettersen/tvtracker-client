import {FormControl} from '@angular/forms'
import {UserService} from '../../services/user.service'

export class SharedValidators {
  static email(c: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    
    return EMAIL_REGEXP.test(c.value) ? null : {
        invalidEmail: {
          valid: false
        }
      }
  }
  
  static shouldBeUnique(userService: UserService) {
    return (c: FormControl) => {
      return new Promise((resolve, reject) => {
        userService.checkEmail(c.value)
          .subscribe(res => {
            if(res.error) {
              resolve({
                shouldBeUnique: {
                  valid: false
                }
              })
            } else {
              resolve(null)
            }
          })
      })
    }
  }
}
