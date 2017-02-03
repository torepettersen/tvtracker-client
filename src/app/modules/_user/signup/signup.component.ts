import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ValidationService} from '../../shared/form/form-validation.service'
import {UserService} from '../../../services/user.service';
import {SharedValidators} from '../../shared/sharedValidators'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup

  constructor(
    private _fb: FormBuilder,
    private _validationService: ValidationService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.signupForm = this._fb.group({
      'email': ['', [
        Validators.required,
        Validators.maxLength(255),
        SharedValidators.email,
      ],
        SharedValidators.shouldBeUnique(this._userService)
      ],
      'password': ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    })
  }

  signup() {
    if(!this.signupForm.valid) return;

    this._userService.signup(
      this.signupForm.value.email,
      this.signupForm.value.password
    )
      .subscribe(
        res => this._router.navigateByUrl('/')
      )
  }

  showError(control: FormControl) {
    return this._validationService.showError(control)
  }


}
