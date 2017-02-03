import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {ValidationService} from '../../shared/form/form-validation.service';
import {Router} from '@angular/router';
import {SharedValidators} from '../../shared/sharedValidators'
import {IAlert} from '../../../interfaces'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  alert: IAlert

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
    this.loginForm = this._fb.group({
      'email': ['', [
        Validators.required,
        Validators.maxLength(255),
        SharedValidators.email
      ]],
      'password': ['',[
        Validators.required,
        Validators.minLength(5)
      ]]
    })
  }

  login() {
    if(!this.loginForm.valid) return;

    this._userService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    )
      .subscribe(
        res => this._router.navigateByUrl('/'),
        err => {
          this.alert = {
            type: 'danger',
            message: err
          }
        }
      )
  }

  showError(control: FormControl) {
    return this._validationService.showError(control)
  }
  
  

}
