import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'yuj-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm: any;
  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Umang'),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(),
      password: new FormControl(),
    });
  }
}
