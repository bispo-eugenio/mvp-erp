import { Component } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { chevronDownOutline, chevronUpOutline, documentTextOutline, pricetagOutline, serverOutline, trendingUpOutline } from 'ionicons/icons';
@Component({
  selector: 'app-product',
  imports: [IonIcon],
  templateUrl: './product.html',
  styleUrl: './product.sass'
})
export class Product {
  constructor(){
    addIcons({
      documentTextOutline,
      chevronDownOutline,
      chevronUpOutline,
      serverOutline,
      pricetagOutline,
      trendingUpOutline

    })
  }
}
