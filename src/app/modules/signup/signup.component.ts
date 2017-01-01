import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ValidationService} from '../form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup
  //email: String

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService
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
    console.log(this.signupForm.value.email)
    console.log(this.signupForm.value.email)
  }

  showError(control: FormControl) {
    return this.validationService.showError(control)
  }


}
