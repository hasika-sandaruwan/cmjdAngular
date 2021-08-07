import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  login(){
    console.log(this.loginForm)
  }

}
