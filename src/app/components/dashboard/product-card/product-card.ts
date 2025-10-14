import { Component, input } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { cubeOutline } from 'ionicons/icons';
@Component({
  selector: 'app-product-card',
  imports: [IonIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.sass'
})
export class ProductCard {

  constructor() {
    addIcons({
      cubeOutline
    })
  }

  id = input.required<string>()
  name = input.required<string>()
  maxQuantity = input.required<number | null>()
  minQuantity = input.required<number | null>()
  quantity = input.required<number | null>()
  total = input.required<number | null>()
}
