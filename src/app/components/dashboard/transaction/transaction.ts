import { Component } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { cubeOutline, layersOutline, personOutline, serverOutline } from 'ionicons/icons';
@Component({
  selector: 'app-transaction',
  imports: [IonIcon],
  templateUrl: './transaction.html',
  styleUrl: './transaction.sass'
})
export class Transaction {

  constructor(){
    addIcons({
      cubeOutline,
      serverOutline,
      layersOutline,
      personOutline
    })
  }

}
