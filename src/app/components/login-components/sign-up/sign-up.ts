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

  ngOnInit(): void {
  }

  constructor(private serviceLogin: Login) {}

  validedForms(): boolean {
    // Regex
    const regexCnjp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // querySelectors Inputs
    const email = document.querySelector("#inputs-form__email") as HTMLInputElement;
    const cnpj = document.querySelector("#inputs-form__cnpj") as HTMLInputElement;
    const terms = document.querySelector("#button-container__terms") as HTMLInputElement;

    //Fluxo de validação com early return 

    if(!regexEmail.test(String(email.value)))
      return false
    if(!regexCnjp.test(String(cnpj.value)))
      return false
    if(terms.checked === false)
      return false

    return true
  }

  signUp(): void {
    const fomrSignUp = document.getElementById("inputs-form") as HTMLFormElement;
    // Se for valido, cadastra
    if(this.validedForms()){
      this.serviceLogin.setRegister("user", this.user);
      fomrSignUp.reset();
    }
  }

}
