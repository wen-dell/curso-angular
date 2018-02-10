import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario);
  }

}
