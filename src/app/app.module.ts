import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// import {} from 'firebase-functions';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
// import { environment } from './../environments/environment';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { Order } from './interfaces/order';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    BreakfastComponent,
    LunchComponent,
    ItemComponent,
    HeaderComponent,
    MainComponent,
    ItemCardComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
