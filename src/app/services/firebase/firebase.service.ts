import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
public todo: any;
public todoCollectionRef: any;
  orders: any;
  constructor(private db: AngularFirestore,) {

    this.orders =  db.collection('orders');
 }
 addMenu(collect,id,body){
   this.db.collection(collect).doc(id).set(body);
 }
 getBreakfastDb(){
  return   this.db.collection('menu').doc('lunch').valueChanges();
 }
 getLunchDb(){
  return this.db.collection('menu').doc('breakfast').valueChanges()
  }
 getOrders() {
  this.db.collection('orders').valueChanges().subscribe(data => console.log(data)); this.db.collection('orders').auditTrail().subscribe(data => {
  this.todo = this.db.collection('orders').snapshotChanges().subscribe(data=> console.log(data)); 
    console.log(data);
  });
  }

 addOrder(order) {
  this.orders.add(order);
 }
}

