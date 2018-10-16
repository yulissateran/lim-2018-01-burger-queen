import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private iconDelete = true;
  private invalidName : boolean = false;
  @Input() order: any[];
  @Input() priceTotal: number;
  @Output() delete:  EventEmitter<any> = new EventEmitter<void>();
  @Output() send:  EventEmitter<any> = new EventEmitter<void>();
  @Output() rest:  EventEmitter<any> = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }
  emmitDelete(indice) {
    this.delete.emit(indice);
  }
  emmitSend(name){
    if(name){
      console.log('emmit')
      this.send.emit(name),
      name = '';
    }  else{ 
      this.invalidName = true;
    }
  }
  emmitRestItem(id){
    this.rest.emit(id);
  }

}
