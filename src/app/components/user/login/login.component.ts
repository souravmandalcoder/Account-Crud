import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public loginForm !: FormGroup;

  login: Login = new Login()

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }


  loginUser() {
    console.log(this.login)
    this.loginService.loginUser(this.login).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['sales'])

      },
      error => console.log(error)
    )
  }
}
