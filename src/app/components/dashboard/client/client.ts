import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import {
  businessOutline, callOutline, closeOutline, mailOutline,
  mapOutline, personOutline
} from 'ionicons/icons';
import { ClientCard } from "../client-card/client-card";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dashboard } from '../../../services/dashboard';
import { ClientService } from '../../../services/client-service';

@Component({
  selector: 'app-client',
  imports: [IonIcon, ClientCard, CommonModule, FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.sass'
})
export class Client implements OnInit {

  constructor(private dashboardService: Dashboard, private clientService: ClientService) {
    addIcons({
      businessOutline,
      personOutline,
      mapOutline,
      callOutline,
      mailOutline,
      closeOutline
    })
  }

  ngOnInit(): void {
    //Carrega os dados já 
    const dataLoad = this.getRegisterClient()
    if (dataLoad) {
      this.clientCollection = JSON.parse(dataLoad)
      this.showClientCollection = JSON.parse(dataLoad)
    }

  }

  client: ClientInterface = {
    id: "",
    name: "",
    cnpj: "",
    phone: "",
    email: "",
    cep: ""
  }

  clientCollection: ClientInterface[] = [];
  showClientCollection: ClientInterface[] = [];
  listId: string[] = [];
  describeDialog:string =  "";

  registerClient(): void {
    if (!this.clientService.validedClientForms()) {
      this.dialogSwitch(true)
      this.describeDialog = this.clientService.validedClientFormsText()
    }
    else {
      const newClient: ClientInterface = {
        id: this.randomId(),
        name: this.client.name,
        cnpj: this.client.cnpj,
        phone: this.client.phone,
        email: this.client.email,
        cep: this.client.cep,
      }
      if(this.validedClient(newClient)){
        this.dialogSwitch(true)
        this.describeDialog = "E-mail ou/e cnpj cadastrado(s)"
        return
      }
      this.listId.push(this.client.id)  
      this.clientCollection.push(newClient)
      this.dashboardService.setItem("client", this.clientCollection);
      const dataClient = this.getRegisterClient()
      if (dataClient)
        this.showClientCollection = JSON.parse(dataClient)
    }
  }

  validedClient(client: ClientInterface): boolean {
    const clientCollection = this.getRegisterClient();
    if(clientCollection){
      const clients = JSON.parse(clientCollection);
      for(let clientIndex of clients){
        if(client["cnpj"] === clientIndex["cnpj"] || client["email"] === clientIndex["email"])
          return true
      }
    }
    return false
  }

  getRegisterClient(): string | null {
    return this.dashboardService.getItem("client");
  }

  randomId(): string {
    //Atribui um conjunto númerico entre 1 a 999999 
    let randomNum = Math.floor((Math.random() * 999999) + 1).toString();
    if (this.listId.length !== 0) {
      //Verifica se os caracters existe na lista
      while (this.listId.includes(randomNum))
        randomNum = Math.floor((Math.random() * 999999) + 1).toString();
    }
    return randomNum;
  }

  dialogSwitch(flag: boolean): void {
    const dialog = document.querySelector(".client-forms-container__info") as HTMLDialogElement
    dialog.open = flag
  }
  

}
