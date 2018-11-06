import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() item : any;
@Input() types : any[];
@Input() itemId : string;
public iconAdd : boolean = true;
  constructor() { }

  ngOnInit() {
    console.log(this.itemId)
    console.log(this.types)
  }

}
