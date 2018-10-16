import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private itemsBreakfast: any[];
  public itemsLunch: any;
  private itemsAll: any[] = [];
  private itemsAllSecond: any[];
  public ListActive: string = 'breakfast';
  public orderLocal: any[] =[];
  public priceTotal: number = 0;
  // private invalidName : boolean = false;

  constructor(
    private _apiService: ApiService,
    private _firebase: FirebaseService
  ) {
    this.getItemsBreakfast();
    this.itemsAll = this._apiService.createItemsAll();
    this.itemsAllSecond = this._apiService.createItemsAll();
    // this._firebase.addOrder({total: 12 ,orders: [{name:'Cafe americano', price: 5}, {name:'Cafe con leche', price: 7 } ],)
    // this._firebase.addOrder({total: 12 ,orders: ['Cafe americano', 'Cafe con leche'], prices:[5, 7]})
    this._firebase.getOrders();
  }
  ngOnInit() {
  }
  getItemsBreakfast() {
    this.itemsBreakfast = this._apiService.createItemsBreakfast();
  }

  getItemsLunch() {
    this.itemsLunch = this._apiService.createItemsLunch();
  }

  checkoutListBreakfast() {
    this.ListActive = 'breakfast';
  }

  checkoutListLunch() {
    console.log('lunch')
    this.getItemsLunch()
    this.ListActive = 'lunch';
  }
  addItemOrder(id) {
    const exist = this.orderLocal.some(item => item.id === id);
    if (exist) {
      let selectItem = this.itemsAllSecond.filter(elem => elem.id === id);
      this.orderLocal = this.orderLocal.map(elem => {
        if (elem.id === id) {
          elem.cantidad ++;
          elem.priceUnit = selectItem[0].price;
          elem.price += selectItem[0].price;
        }   
         return elem;
      }),
        this.priceTotal = this.orderLocal.reduce((a, b) => { return a + b.price }, 0);
    } else {
      let select = this.itemsAll.filter(elem => elem.id === id);
      this.orderLocal = this.orderLocal.concat(select);
      this.priceTotal = this.orderLocal.reduce((a, b) => { return a + b.price }, 0);
    }
  }
  restItem(id){
    this.orderLocal.forEach((elem,i) => {
      if(elem.id === id) {
        if (elem.price - elem.priceUnit > 0 ) {
        this.orderLocal[i].price -= elem.priceUnit;
        this.orderLocal[i].cantidad --;
        } else this.deleteItem(i);
      };     
    });
  }

  sendOrder(name) {
    this._firebase.addOrder({ items: this.orderLocal, total: this.priceTotal, nameClient: name }),
    this.orderLocal = [];
    this.priceTotal = 0;
  }
  deleteItem(indice) {
    this.orderLocal.splice(indice, 1);
    this.priceTotal = this.orderLocal.reduce((a, b) => { return a + b.price }, 0);
  }
}
