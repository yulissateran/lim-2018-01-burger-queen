import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() iconAdd: boolean;
@Input() iconDelete: boolean;
@Input() item: any;
@Input() indice: any;
@Input() isSimbol: boolean;
@Output() newItem:  EventEmitter<any> = new EventEmitter<void>();
@Output() delete:  EventEmitter<any> = new EventEmitter<void>();
@Output() rest:  EventEmitter<any> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  
  emmitItem(id){
    this.newItem.emit(id);
  }
  emmitDelete(indice) {
    this.delete.emit(indice);
  }
  emmitRestItem(id){
    this.rest.emit(id);
  }
}
