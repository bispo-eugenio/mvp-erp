import { Component, OnInit } from '@angular/core';
import { Login } from '../../../services/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.sass'
})
export class SignUp implements OnInit {

  // Objeto user
  user: User = {
    email: "",
    name: "",
    cnpj: "",
    password: ""
  }

  infoForms = "";

  ngOnInit(): void {  
  }
  
  constructor(private serviceLogin: Login) {}
  
  
  signUp(): void {
    const fomrSignUp = document.getElementById("inputs-form") as HTMLFormElement;
    this.infoForms = this.serviceLogin.infoFormsValueSignUp()
    // Se for valido, cadastra
    if(this.serviceLogin.validedForms()){
      this.serviceLogin.setRegister("user", this.user);
      fomrSignUp.reset();
    }
  }
}
