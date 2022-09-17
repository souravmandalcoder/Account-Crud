import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  login: Login = new Login()

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log("Login loaded")
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  loginUser() {
    this.loginService.getDetails().subscribe(res => {
      this.login = res;
      console.log(this.login);
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("Login Success")
        this.loginForm.reset()
        this.router.navigate(['sales'])
      }
      else {
        alert("User Not Found")
      }
    }, err => {
      alert("Something Went Wrong")
    })
    console.log(this.loginForm.value)


  }

}
