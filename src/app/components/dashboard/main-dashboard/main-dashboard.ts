import { Component, OnInit } from '@angular/core';
import { Status } from "../status/status";
import { CardDashboard } from "../card-dashboard/card-dashboard";
import { Auth } from '../../../services/auth';
import { MainDashboardService } from '../../../services/main-dashboard-service';

@Component({
  selector: 'app-main-dashboard',
  imports: [Status, CardDashboard],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.sass'
})
export class MainDashboard implements OnInit {

  constructor(private authService: Auth, private mainService: MainDashboardService) { }

  user: string | null = null
  name: string = "";

  ngOnInit(): void {
    if (this.authService.getAuthLogin()) {
      this.user = this.authService.getAuthLogin();
    }
    else {
      this.user = null;
    }
    if (this.user) {
      const data = JSON.parse(this.user)
      this.name = data["name"]
    }
    else {
      this.name = "Desconhecido"
    }

    this.refund = this.mainService.getQuantityTransaction("Devolução");
    this.sold = this.mainService.getQuantityTransaction("Vendas");
    this.storage = this.mainService.getQuantityProduct();
  }

  refund = 0;
  sold = 0;
  storage = 0;

}
