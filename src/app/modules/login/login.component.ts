import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {ValidationService} from '../form/form-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', Validators.required]
    })
  }

  login() {
    if(!this.loginForm.valid) return;

    this.userService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    )
      .subscribe()
  }

  showError(control: FormControl) {
    return this.validationService.showError(control)
  }

}
