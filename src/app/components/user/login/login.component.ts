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

  login: Login = new Login()

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("Login loaded")
  }

  getDetails() {
    this.loginService.getDetails().subscribe(res => {
      this.login = res;
      console.log(this.login);
    })
  }

}
