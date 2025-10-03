import { Component } from '@angular/core';
import { Login } from '../../../services/login';
import { FormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.sass'
})
export class SignIn {

  constructor(private serviceLogin: Login){}
 
  user = {
    email: "",
    password: ""
  }
  
  signIn(): void {
    const collection = this.serviceLogin.getRegister("user")
    if(collection != null) { 
      for(let index of collection) {
        let itemString = JSON.stringify(index);
        let itemJson = JSON.parse(itemString);
        (this.user.email == itemJson["email"] && this.user.password == itemJson["password"]) ? console.log("Logou") : console.log("senha ou/e email incorreto")
      }
    }
  }
}
