import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  validedProductForms(): boolean {
    const regexName: RegExp = /^[A-Za-z0-9\s\-\_\/\(\)\.\,\&\+]*$/
    const regexNum: RegExp = /^[0-9]*\.?[0-9]+$/

    const name = document.querySelector(".forms-container__name") as HTMLInputElement;
    const minQuantity = document.querySelector(".forms-container__min") as HTMLInputElement;
    const maxQuantity = document.querySelector(".forms-container__max") as HTMLInputElement;
    const quantity = document.querySelector(".forms-container__quantity") as HTMLInputElement;
    const price = document.querySelector(".forms-container__price") as HTMLInputElement;
    const profit = document.querySelector(".forms-container__profit") as HTMLInputElement;

    if(!regexName.test(name.value))
      return false
    if(!regexNum.test(minQuantity.value))
      return false
    if(!regexNum.test(maxQuantity.value))
      return false
    if(!regexNum.test(quantity.value))
      return false
    if(!regexNum.test(price.value))
      return false
    if(!regexNum.test(profit.value))
      return false

    return true
  }

  validedProductFormsText(): string {
    const regexName: RegExp = /^[A-Za-z0-9\s\-\_\/\(\)\.\,\&\+]*$/
    const regexNum: RegExp = /^[0-9]*\.?[0-9]+$/

    const name = document.querySelector(".forms-container__name") as HTMLInputElement;
    const minQuantity = document.querySelector(".forms-container__min") as HTMLInputElement;
    const maxQuantity = document.querySelector(".forms-container__max") as HTMLInputElement;
    const quantity = document.querySelector(".forms-container__quantity") as HTMLInputElement;
    const price = document.querySelector(".forms-container__price") as HTMLInputElement;
    const profit = document.querySelector(".forms-container__profit") as HTMLInputElement;
    if(name.value.length === 0)
      return "O campo nome está vazio."
    if(!regexName.test(name.value))
      return "O campo nome não pode conter caracters especiais como: #%@"
    if(minQuantity.value.length === 0)
      return "O campo quantidade mínima está vazio."
    if(!(parseInt(minQuantity.value) > 0)){
      return "O campo quantidade mínima apenas aceita números inteiros positivo."}
    if(!regexNum.test(minQuantity.value))
      return "O campo quantidade mínima apenas aceita número inteiro seguido de ponto."
    if(maxQuantity.value.length === 0)
      return "O campo quantidade máxima está vazio."
    if(!(parseInt(maxQuantity.value) > 0))
      return "O campo quantidade máxima apenas aceita números inteiros positivo."
    if(!regexNum.test(maxQuantity.value))
      return "O campo quantidade máxima apenas aceita número inteiro seguido de ponto."
    if(quantity.value.length === 0)
      return "O campo quantidade está vazio."
    if(!(parseInt(quantity.value) > 0))
      return "O campo quantidade apenas aceita números inteiros positivo."
    if(!regexNum.test(quantity.value))
      return "O campo quantidade apenas aceita número inteiro seguido de ponto."
    if(price.value.length === 0)
      return "O campo preço está vazio."
    if(!(parseFloat(price.value) > 0))
      return "O campo preço apenas aceita números inteiros positivo."
    if(!regexNum.test(price.value))
      return "O campo preço apenas aceita número inteiro seguido de ponto."
    if(profit.value.length === 0)
      return "O campo lucro está vazio."
    if(!(parseFloat(profit.value) > 0))
      return "O campo lucro apenas aceita números inteiros positivo."
    if(!regexNum.test(profit.value))
      return "O campo lucro apenas aceita número inteiro seguido de ponto."

    return ""
  }
  
}
