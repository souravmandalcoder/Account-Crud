import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials: Login = new Login();
  login: Login = new Login()
  convertedLogin: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("Login loaded")
  }

  getDetails() {
    console.log(this.login)
    this.loginService.getDetails().subscribe(res => {
      this.loginCredentials = res;
      console.log(this.loginCredentials);
    })

    this.convertedLogin = Object.values(this.loginCredentials);
    console.log(typeof (this.convertedLogin))

    setTimeout(() => {
      if (this.login.email == '123@gmail.com') {
        console.log("Same Credentials")
      }
      else {
        console.log("Not same credentials")
      }
    }, 2000);

  }

}
