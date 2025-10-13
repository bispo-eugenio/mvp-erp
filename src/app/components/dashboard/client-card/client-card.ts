import { Component, input } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-client-card',
  imports: [IonIcon],
  templateUrl: './client-card.html',
  styleUrl: './client-card.sass'
})
export class ClientCard {

  constructor(){
    addIcons({
      personOutline
    })
  }

  id = input.required<string>()
  name = input.required<string>()
  cnpj = input.required<string>()
  phone = input.required<string>()
  email = input.required<string>()
  cep = input.required<string>()
}
