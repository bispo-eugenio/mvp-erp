import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagCheckOutline, calculatorOutline, cashOutline, copyOutline, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-status',
  imports: [IonIcon],
  templateUrl: './status.html',
  styleUrl: './status.sass'
})
export class Status {
  constructor(){
    addIcons({
      cashOutline,
      calculatorOutline,
      bagCheckOutline,
      personAddOutline,
      copyOutline
    })
  }
}
