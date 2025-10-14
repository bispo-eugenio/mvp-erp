import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { closeOutline, cubeOutline, layersOutline, personOutline, serverOutline } from 'ionicons/icons';
import { Dashboard } from '../../../services/dashboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionCard } from '../transaction-card/transaction-card';
@Component({
  selector: 'app-transaction',
  imports: [IonIcon, CommonModule, FormsModule, TransactionCard],
  templateUrl: './transaction.html',
  styleUrl: './transaction.sass'
})
export class Transaction implements OnInit {

  constructor(private dashboardService: Dashboard) {
    addIcons({
      cubeOutline,
      serverOutline,
      layersOutline,
      personOutline,
      closeOutline
    })
  }

  transaction: transactionInterface = {
    id: "",
    productName: "",
    productQuantity: null,
    typeTransaction: "",
    clientName: ""
  }

  ngOnInit(): void {
    this.clientCollection = this.selectClient()
    this.productCollection = this.selectProduct()
    const dataLoadTransaction = this.getRegisterTransaction()
    if (dataLoadTransaction) {
      this.transactionCollection = JSON.parse(dataLoadTransaction);
      this.showTransactionCollection = JSON.parse(dataLoadTransaction);
    }
  }

  clientCollection: ClientInterface[] = [];
  productCollection: ProductInterface[] = [];
  listId: string[] = [];
  transactionCollection: transactionInterface[] = [];
  showTransactionCollection: transactionInterface[] = [];


  registerTransaction(): void {
    const newTransaction: transactionInterface = {
      id: this.randomId(),
      productName: this.transaction.productName,
      productQuantity: this.transaction.productQuantity,
      typeTransaction: this.transaction.typeTransaction,
    }
    if (newTransaction.productQuantity && newTransaction.productQuantity < 0)
      return
    if (newTransaction.typeTransaction && newTransaction.typeTransaction === "Vendas") {
      newTransaction.clientName = this.transaction.clientName;
      let product = this.getProduct()
      if (product) {
        const productGroup = JSON.parse(product);
        for (let item of productGroup) {
          if (newTransaction["productName"] === item["name"]) {
            if (newTransaction) {
              let value = newTransaction.productQuantity;
              if (value)
                item["quantity"] -= value;
            }
          }
        }
        this.dashboardService.setItem("product", productGroup);
      }
    }
    else if (newTransaction.typeTransaction && newTransaction.typeTransaction === "Reabastecer") {
      let product = this.getProduct()
      if (product) {
        const productGroup = JSON.parse(product);
        for (let item of productGroup) {
          if (newTransaction["productName"] === item["name"]) {
            if (newTransaction) {
              let value = newTransaction.productQuantity;
              if (value)
                item["quantity"] += value;
            }
          }
        }
        this.dashboardService.setItem("product", productGroup);
      }
    }
    if(newTransaction.productQuantity === null || newTransaction.productQuantity === 0)
      return
    if(newTransaction.typeTransaction === "")
      return
    this.listId.push(newTransaction.id);
    this.transactionCollection.push(newTransaction);
    this.dashboardService.setItem("transaction", this.transactionCollection);
    const getDataTransaction = this.getRegisterTransaction()
    if (getDataTransaction)
      this.showTransactionCollection = JSON.parse(getDataTransaction);
  }

  getRegisterTransaction(): string | null {
    return this.dashboardService.getItem("transaction")
  }

  selectClient(): ClientInterface[] {
    const clients = this.getClient();
    if (clients)
      return JSON.parse(clients);
    return []
  }

  selectProduct(): ProductInterface[] {
    const products = this.getProduct();
    if (products)
      return JSON.parse(products);
    return []
  }

  getClient(): string | null {
    return this.dashboardService.getItem("client") ? this.dashboardService.getItem("client") : ""
  }
  getProduct(): string | null {
    return this.dashboardService.getItem("product") ? this.dashboardService.getItem("product") : ""
  }

  randomId(): string {
    //Atribui um conjunto númerico entre 1 a 999999 
    let randomNum = Math.floor((Math.random() * 999999) + 1).toString();
    if (this.listId.length !== 0) {
      //Verifica se os caracters existe na lista
      while (this.listId.includes(randomNum))
        randomNum = Math.floor((Math.random() * 999999) + 1).toString();
    }
    return randomNum;
  }

}
