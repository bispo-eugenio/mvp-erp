import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons'
import { IonIcon } from '@ionic/angular/standalone';
import { chevronDownOutline, chevronUpOutline, documentTextOutline, pricetagOutline, serverOutline, trendingUpOutline } from 'ionicons/icons';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';
import { Dashboard } from '../../../services/dashboard';
@Component({
  selector: 'app-product',
  imports: [IonIcon, ProductCard, CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.sass'
})
export class Product implements OnInit {
  constructor(private productService: ProductService, private dashboardService: Dashboard) {
    addIcons({
      documentTextOutline,
      chevronDownOutline,
      chevronUpOutline,
      serverOutline,
      pricetagOutline,
      trendingUpOutline

    })
  }

  ngOnInit(): void {
    const dataLoadProduct = this.getRegisterProduct()
    if (dataLoadProduct) {
      this.productCollection = JSON.parse(dataLoadProduct);
      this.showProductCollection = JSON.parse(dataLoadProduct);
    }
  }

  product: ProductInterface = {
    id: "",
    name: "",
    minQuantity: null,
    maxQuantity: null,
    quantity: null,
    price: null,
    profit: null,
    total: null
  }
  productCollection: ProductInterface[] = [];
  showProductCollection: ProductInterface[] = [];
  listId: string[] = [];
  describeDialog: string = "";


  registerProduct(): void {
    if (!this.productService.validedProductForms()) {
      this.dialogInfoSwitch(true)
      this.describeDialog = this.productService.validedProductFormsText()
    }
    else {
      const newProduct: ProductInterface = {
        id: this.randomId(),
        name: this.product.name,
        minQuantity: this.product.minQuantity,
        maxQuantity: this.product.maxQuantity,
        quantity: this.product.quantity,
        price: this.product.price,
        profit: this.product.profit,
        total: this.total()
      }
      if (this.validedProduct(newProduct)) {
        this.dialogInfoSwitch(true)
        this.describeDialog = "Produto já cadastrado."
        return
      }
      if (newProduct.maxQuantity && newProduct.quantity && newProduct.maxQuantity < newProduct.quantity) {
        this.dialogInfoSwitch(true)
        this.describeDialog = "Não pode cadastrar um item que a quantidade máxima é menor que a quantidade normal do produto."
        return
      }

      if (newProduct.minQuantity && newProduct.quantity && newProduct.minQuantity > newProduct.quantity) {
        this.dialogInfoSwitch(true)
        this.describeDialog = "Não pode cadastrar um item que a quantidade máxima é menor que a quantidade normal do produto."
        return
      }
      this.listId.push(newProduct.id);
      this.productCollection.push(newProduct);
      this.dashboardService.setItem("product", this.productCollection);
      const dataProduct = this.getRegisterProduct()
      if (dataProduct)
        this.showProductCollection = JSON.parse(dataProduct);
    }
  }
  deleteProduct(): void {
    const input = document.querySelector(".product-forms-container__delete-input") as HTMLInputElement;
    const dataProductCollection = this.getRegisterProduct();
    if (dataProductCollection) {
      let data = JSON.parse(dataProductCollection);
      for (let index = 0; index < data.length; index++) {
        if (data[index]["id"] === input.value) {
          this.productCollection.splice(index, 1)
          data.splice(index, 1);
          this.dashboardService.setItem("product", data)
          let getDataProduct = this.getRegisterProduct();
          if (getDataProduct)
            this.showProductCollection = JSON.parse(getDataProduct);
          console.log(this.showProductCollection)
        }
      }
    }
  }

  validedProduct(product: ProductInterface): boolean {
    const ProductCollection = this.getRegisterProduct();
    if (ProductCollection) {
      const productService = JSON.parse(ProductCollection);
      for (let productIndex of productService) {
        if (product["name"] === productIndex["name"])
          return true
      }
    }
    return false
  }

  getRegisterProduct(): string | null {
    return this.dashboardService.getItem("product");
  }

  total(): number {
    if (this.product.profit && this.product.price) {
      let num = this.product.profit / 100
      return this.product.price + (num * this.product.price)
    }
    return 0
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

  dialogInfoSwitch(flag: boolean): void {
    const dialog = document.querySelector(".product-forms-container__info") as HTMLDialogElement
    dialog.open = flag
  }

  dialogDeleteSwitch(flag: boolean): void {
    const dialog = document.querySelector(".product-forms-container__delete") as HTMLDialogElement
    dialog.open = flag
  }
}
