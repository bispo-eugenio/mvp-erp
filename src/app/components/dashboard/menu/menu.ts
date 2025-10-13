import { AfterContentInit, Component } from '@angular/core';
import { Dashboard } from '../../../services/dashboard';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  hammerOutline,
  settingsOutline,
  logOutOutline,
  swapHorizontalOutline,
  gridOutline,
  peopleOutline,
  cubeOutline,
  closeOutline,
} from 'ionicons/icons';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-menu',
  imports: [IonIcon],
  templateUrl: './menu.html',
  styleUrl: './menu.sass'
})
export class Menu implements AfterContentInit {

  constructor(private dashboardService: Dashboard, private authService: Auth) {
    //Adiciona icons pela bibliotéca
    addIcons({
      hammerOutline, //Estoque
      gridOutline, //Dashboard
      peopleOutline, //Cliente
      cubeOutline, //Produto
      swapHorizontalOutline, //Transação
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

  eventClick(num: number): void {
    this.dashboardService.switchNum(num)
  }

  logout():void {
    this.authService.logout()
  }
  
}
