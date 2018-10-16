import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
@Input()  itemsLunch: any;
@Output() newItem:  EventEmitter<any> = new EventEmitter<void>();
iconAdd = true;

constructor() { }

ngOnInit() {
}
emmitItem(id){
  this.newItem.emit(id);
}
}
