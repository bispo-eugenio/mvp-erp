import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  constructOutline,
  podiumOutline,
  bodyOutline,
  businessOutline,
  cash,
} from 'ionicons/icons';

@Component({
  selector: 'app-card',
  imports: [IonIcon],
  templateUrl: './card.html',
  styleUrl: './card.sass',
})
export class Card {
  constructor() {
    addIcons({
      construct: constructOutline,
      podium: podiumOutline,
      body: bodyOutline,
      business: businessOutline,
      cash: cash,
    });
  }

  cardTitle = input.required<string>();
  iconName = input.required<string>();
  cardDescribe = input.required<string>();
}
