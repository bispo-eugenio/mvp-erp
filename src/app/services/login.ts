import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Login {

  users: Users = []

  getRegister(key: string): string | null {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  }

  setRegister(key: string, item: User): void {
    this.users.push(item);
    localStorage.setItem(key, JSON.stringify(this.users));
  }

  validedForms(): boolean {

    // Regex
    const regexCnjp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // querySelectors Inputs
    const email = document.querySelector("#inputs-form__email") as HTMLInputElement;
    const name = document.querySelector("#inputs-form__name") as HTMLInputElement
    const cnpj = document.querySelector("#inputs-form__cnpj") as HTMLInputElement;
    const password = document.querySelector("#inputs-form__password") as HTMLInputElement;
    const terms = document.querySelector("#button-container__terms") as HTMLInputElement;

    //Fluxo de validação com early return 
    if (!regexEmail.test(String(email.value)))
      return false
    if (name.value.length < 3)
      return false
    if (!regexCnjp.test(String(cnpj.value)))
      return false
    if (password.value.length < 8)
      return false
    if (terms.checked === false)
      return false

    return true
  }

  infoFormsValueSignUp(): string {
    // Regex
    const regexCnjp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // querySelectors Inputs
    const email = document.querySelector("#inputs-form__email") as HTMLInputElement;
    const name = document.querySelector("#inputs-form__name") as HTMLInputElement
    const cnpj = document.querySelector("#inputs-form__cnpj") as HTMLInputElement;
    const password = document.querySelector("#inputs-form__password") as HTMLInputElement;
    const terms = document.querySelector("#button-container__terms") as HTMLInputElement;
    
    // Retorna valores da mensagem.
    if (!regexEmail.test(String(email.value)))
      return email.value.length === 0 ? "E-mail não foi preechido." : "Email não foi preechido corretamente.";
    if (name.value.length < 3)
      return name.value.length === 0 ? "O nome não foi preechido." : 'O nome precisa ter pelo menos 3 caracters.'
    if (!regexCnjp.test(String(cnpj.value)))
      return cnpj.value.length === 0 ? 'O cnpj não foi preechido.' : "Cnpj não indentificado."
    if (password.value.length < 8)
      return password.value.length === 0 ? "Insira uma senha." : "Senha precisa ter no mínimo 8 caracters."
    if (terms.checked === false)
      return "Aceite os termos de privacidade."
    return "";
  }

}