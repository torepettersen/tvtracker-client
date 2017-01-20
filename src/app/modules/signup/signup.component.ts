import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ValidationService} from '../form';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.signupForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', Validators.required]
    })
  }

  signup() {
    if(!this.signupForm.valid) return;

    this.userService.signup(
      this.signupForm.value.email,
      this.signupForm.value.password
    )
      .subscribe(res => {})
  }

  showError(control: FormControl) {
    return this.validationService.showError(control)
  }


}
