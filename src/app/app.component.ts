import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

export interface Item { name: string; }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'burger-queen';

  constructor(private swUpdate: SwUpdate) {
  }

 ngOnInit() {
  if (this.swUpdate.isEnabled) {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
 }
  

}
