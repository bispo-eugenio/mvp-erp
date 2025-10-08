import { Component, OnInit } from '@angular/core';
import { SignIn } from "../sign-in/sign-in";
import { SignUp } from "../sign-up/sign-up";

@Component({
  selector: 'app-login-page',
  imports: [SignIn, SignUp],
  templateUrl: './login-page.html',
  styleUrl: './login-page.sass'
})
export class LoginPage implements OnInit {
  ngOnInit(): void {
    this.startChecked()
  }  

  flagChecked(): boolean {
    const signIn = document.getElementById("sign-in-btn") as HTMLInputElement;
    return signIn.checked === true ? true : false
  }

  startChecked(): void {
    const signIn = document.getElementById("sign-in-btn") as HTMLInputElement
    const signUp = document.getElementById("sign-up-btn") as HTMLInputElement
    if(signIn.checked == false && signUp.checked == false)
      signIn.checked = true
  }

  optionChecked(): void {
    const signIn = document.getElementById("sign-in-btn") as HTMLInputElement
    const signUp = document.getElementById("sign-up-btn") as HTMLInputElement
    if (signIn.checked == true && signUp.checked == false){
      signUp.checked = true
      signIn.checked = !signUp
    } 
    if (signIn.checked == false && signUp.checked == true)  {
      signUp.checked = false
      signIn.checked = !signUp
    }
  }
}
