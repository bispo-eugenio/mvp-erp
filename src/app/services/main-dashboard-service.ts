import { Injectable } from '@angular/core';
import { Dashboard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  constructor(private dashboardService: Dashboard){}

  getTransaction(): string | null {
    return (this.dashboardService.getItem("transaction")) ? this.dashboardService.getItem("transaction") : ""
  }

  
  getProduct(): string | null {
    return (this.dashboardService.getItem("product")) ? this.dashboardService.getItem("product") : ""
  }

  getQuantityTransaction(name: string): number {
    let count = 0
    const transactionCollectionString = this.getTransaction();
    if(transactionCollectionString){
      const transactionCollection = JSON.parse(transactionCollectionString);
      for(let transaction of transactionCollection){
        if(transaction["typeTransaction"] === name)
          count+=1
      }
      return count
    }
    return count
  }

  getQuantityProduct(): number {
    let count = 0;
    const productCollectionString = this.getProduct();
    if(productCollectionString){
      const productCollection = JSON.parse(productCollectionString);
      for(let product of productCollection){
        count += product["quantity"];
      }
      return count;
    }
    return count
  }
  
}
