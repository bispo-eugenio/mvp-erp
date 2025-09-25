import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.sass'
})
export class SignUp implements OnInit {
  ngOnInit(): void {
    this.setDisabled()
  }

  setDisabled(): void {
    const buttonSignUp = document.getElementById("button-container__button-sign-up") as HTMLButtonElement;
    buttonSignUp.setAttribute('disabled', '');
    buttonSignUp.disabled = true
  }
}
