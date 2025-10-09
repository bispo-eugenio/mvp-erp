import { AfterContentInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  hammerOutline,
  settingsOutline,
  logOutOutline,
  readerOutline,
  swapHorizontalOutline,
  gridOutline,
  peopleOutline,
  cubeOutline,
  closeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  imports: [IonIcon, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.sass'
})
export class Menu implements AfterContentInit {

  constructor() {
    //Adiciona icons pela bibliotéca
    addIcons({
      hammerOutline, //Estoque
      gridOutline, //Dashboard
      peopleOutline, //Cliente
      cubeOutline, //Produto
      swapHorizontalOutline, //Transação
      readerOutline, //Relatório
      settingsOutline, //Configurações
      logOutOutline, // Deslogar
      closeOutline //Close
    })
  }
  
  ngAfterContentInit(): void {
    const link = document.querySelectorAll('.nav-container__item');
    link.forEach((item) => {
      item.addEventListener("click", () => {
        link.forEach((item) => {
          item.classList.remove("active")
        })
        item.classList.add("active");
      })
    })
  }
  
}
