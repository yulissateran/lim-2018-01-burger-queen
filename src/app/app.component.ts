import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       {{ (item | async)?.name }}
//     </div>
//   `
// })
// export class AppComponent {
  
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-queen';

  constructor() {
  }

}
