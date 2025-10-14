import { Component, input } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { statsChartOutline } from 'ionicons/icons';
@Component({
  selector: 'app-transaction-card',
  imports: [IonIcon],
  templateUrl: './transaction-card.html',
  styleUrl: './transaction-card.sass'
})
export class TransactionCard {
  constructor(){
    addIcons({
      statsChartOutline
    })
  }

  id = input.required<string>()
  productName = input.required<string>()
  clientName = input.required<string | undefined>()
  productQuantity = input.required<number | null>()
  typeTransaction = input.required<string>()
}
