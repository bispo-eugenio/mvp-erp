import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  validedClientForms(): boolean {
    //Regex
    const regexName: RegExp = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/
    const regexCnjp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexPhone: RegExp = /^\(?([1-9]{2})\)? ?(?:9[0-9]|[2-8])[0-9]{3}\-?[0-9]{4}$/
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexCep: RegExp = /^\d{5}-\d{3}$/;

    //Querys
    const name = document.querySelector(".forms-container__name") as HTMLInputElement
    const cnpj = document.querySelector(".forms-container__cnpj") as HTMLInputElement
    const phone = document.querySelector(".forms-container__phone") as HTMLInputElement
    const email = document.querySelector(".forms-container__email") as HTMLInputElement
    const cep = document.querySelector(".forms-container__cep") as HTMLInputElement

    //Validaçõa
    if (name.value.length < 6 && name.value.length > 24)
      return false
    if (!regexName.test(name.value))
      return false
    if (!regexCnjp.test(cnpj.value))
      return false
    if (!regexPhone.test(phone.value))
      return false
    if (!regexEmail.test(email.value))
      return false
    if (!regexCep.test(cep.value))
      return false
    return true
  }

  validedClientFormsText(): string {
    //Regex
    const regexName: RegExp = /^([A-ZÀ-Ú][a-zà-ú']{1,})(\s[A-ZÀ-Ú][a-zà-ú']{1,})+$/
    const regexCnjp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const regexPhone: RegExp = /^\(?([1-9]{2})\)? ?(?:9[0-9]|[2-8])[0-9]{3}\-?[0-9]{4}$/
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexCep: RegExp = /^\d{5}-\d{3}$/;

    //Querys
    const name = document.querySelector(".forms-container__name") as HTMLInputElement
    const cnpj = document.querySelector(".forms-container__cnpj") as HTMLInputElement
    const phone = document.querySelector(".forms-container__phone") as HTMLInputElement
    const email = document.querySelector(".forms-container__email") as HTMLInputElement
    const cep = document.querySelector(".forms-container__cep") as HTMLInputElement

    //Validaçõa
    if (name.value.length < 6 && name.value.length > 24)
      return "O campo nome excede a quantidade máxima de caracters."
    if (!regexName.test(name.value))
      return "O campo nome precisa ser acompanhado de pelo menos 1 sobrenome e não conter caracters especiais. \nExemplo: Pedro Lucas"
    if (!regexCnjp.test(cnpj.value))
      return "O campo cnpj precisa ser preenchido corretamente. \nExemplo: 48.504.102/0001-70"
    if (!regexPhone.test(phone.value))
      return "O campo telefone precisa ser acompanhado de DDD e o primeiro digito sendo 9. \nExemplo: (11) 98765-4321"
    if (!regexEmail.test(email.value))
      return "O campo e-mail precisa ser preenchido corretamente. \nExemplo: example@test.com"
    if (!regexCep.test(cep.value))
      return "O campo cep precisa ser preenchido corretamente. \nExemplo: 12345-678"
    return ""
  }

}
