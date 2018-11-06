import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() keysListActive: string[];
  @Input() itemsBreakfast: any;
  @Output() newItem:  EventEmitter<any> = new EventEmitter<void>();
   public iconAdd = true;
  constructor() { }

  ngOnInit() {
  }
  emmitItem(id){
    this.newItem.emit(id);
  }
}
