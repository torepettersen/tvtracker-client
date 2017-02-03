import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValidationService} from './form-validation.service';


@Component({
  selector: 'form-control-group',
  templateUrl: 'form-control-group.html',
  styles: [`
    span {
      font-size: 0.8em;
    }
  `]
})
export class FormControlGroupComponent {
  @Input() key: string;
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() type: string = "text"

  constructor(private validationService: ValidationService) { }

  showError() {
    return this.validationService.showError(this.form.controls[this.key])
  }

  get errorMessage() {
    let control = this.form.controls[this.key]
    for (let propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return this.validationService.getValidatorErrorMessage(propertyName, control.errors[propertyName]);
      }
    }

    return null;
  }
}
