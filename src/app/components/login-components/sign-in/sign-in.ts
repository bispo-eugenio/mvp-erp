import { Component } from '@angular/core';
import { Login } from '../../../services/login';
import { FormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.sass'
})
export class SignIn {

  constructor(private loginService: Auth, private router: Router) { }

  user = {
    email: "",
    password: ""
  }

  infoForms = "";

  signIn(): void {
    if (this.user.email === "" || this.user.password === "") {
      console.log(this.user)
      this.infoForms = "Preecha os campos faltantes."
      return
    }
    if (this.loginService.login(this.user)) {
      this.infoForms = "Login bem-sucedido!"
      this.router.navigate(["/dashboard"])
    }
    else {
      this.infoForms = "E-mail ou/e senha inválido(s)."
      return
    }

  }
}
