import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public token!: String;
  public isLoggedin = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  public login(clientType: String, email: String, password: String) {
    this.loginService.login(clientType, email, password).subscribe(
      (token) => {
        console.log(token);

        this.token = token;
        this.isLoggedin = true;
        alert(token);
      },
      (err) => {
        alert('error: ' + err.message);
        this.isLoggedin = false;
      }
    );
  }
}
