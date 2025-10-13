import { Component, OnInit } from '@angular/core';
import { Status } from "../status/status";
import { CardDashboard } from "../card-dashboard/card-dashboard";
import { AlertList } from '../alert-list/alert-list';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-main-dashboard',
  imports: [Status, CardDashboard, AlertList],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.sass'
})
export class MainDashboard implements OnInit {

  constructor(private authService: Auth) { }

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
  }

}
