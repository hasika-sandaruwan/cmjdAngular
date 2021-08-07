import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm = new FormGroup({
    email: new FormControl(
      '',
      [Validators.required, Validators.email]
      ),
    password: new FormControl(
      '',
      [Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6)]
      )
  });

  login(){
    const tempEmail=this.loginForm.get('email')?.value;
    const tempPassword=this.loginForm.get('password')?.value;

    console.log(tempEmail);
    console.log(tempPassword);
  }

}
