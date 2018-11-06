import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  isOpen = false;
 
  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}

// export class SideBarToggleComponent {
//   constructor(
//     private sideBarService: SideBarService
//   ) { }
//   @HostListener('click')
//   click() {
//     this.sideBarService.toggle();
//   }
// }

// export class SideBarComponent {
//   @HostBinding('class.is-open')
//   isOpen = false;
//   constructor(
//     private sideBarService: SideBarService
//   ) { }
//   ngOnInit() {
//     this.sideBarService.change.subscribe(isOpen => {
//       this.isOpen = isOpen;
//     });
//   }
// }
