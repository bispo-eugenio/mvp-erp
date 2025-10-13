import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { MainDashboard } from "../main-dashboard/main-dashboard";
import { Client } from '../client/client';
import { Product } from '../product/product';
import { Transaction } from '../transaction/transaction';
import { Dashboard } from '../../../services/dashboard';
@Component({
  selector: 'app-dashboard-page',
  imports: [Menu, MainDashboard, Client, Product, Transaction],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.sass'
})
export class DashboardPage{

  constructor(private dashboardService: Dashboard){}


  receiver(): number {
    return this.dashboardService.receiver;
  }
  

}
