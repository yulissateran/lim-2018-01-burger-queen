import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  createItemsBreakfast() {
    return [
      { name: 'Cafe americano', id: '1b', price: 5 , cantidad: 1 },
      { name: 'Cafe con leche', id: '2b', price: 7, cantidad: 1  },
      { name: 'Sandwich de jamón y queso', id: '3b', price: 10, cantidad: 1  },
      { name: 'Jugo natural', id: '4b', price: 7, cantidad: 1  },
    ]
  }
  createItemsLunch() {
    return [
      
      { name: 'Hamburguesa simple', id: '1l', price: 10, cantidad: 1  },
      { name: 'Hamburguesa doble', id: '2l', price: 15 , cantidad: 1 },
      { name: 'Papas fritas', id: '3l', price: 5 , cantidad: 1 },
      { name: 'Onion Rings', id: '4l', price: 5 , cantidad: 1 },
      { name: 'Huevo', id: '5l', price: 1 , cantidad: 1 },
      { name: 'Queso', id: '6l', price: 1 , cantidad: 1 },
      { name: 'Agua 500ml', id: '7l', price: 5, cantidad: 1 },
      { name: 'Agua 750ml', id: '8l', price: 8 , cantidad: 1 },
      { name: 'Gaseosa 500ml', id: '9l', price: 7 , cantidad: 1 },
      { name: 'Gaseosa 750ml', id: '10l', price: 10, cantidad: 1  },
    ]
  }
  createItemsAll() {
    return [
      { name: 'Cafe americano', id: '1b', price: 5 , cantidad: 1 },
      { name: 'Cafe con leche', id: '2b', price: 7 , cantidad: 1 },
      { name: 'Sandwich de jamón y queso', id: '3b', price: 10 , cantidad: 1 },
      { name: 'Jugo natural', id: '4b', price: 7, cantidad: 1  },
      { name: 'Hamburguesa simple', id: '1l', price: 10, cantidad: 1  },
      { name: 'Hamburguesa doble', id: '2l', price: 15, cantidad: 1  },
      { name: 'Papas fritas', id: '3l', price: 5, cantidad: 1  },
      { name: 'Onion Rings', id: '4l', price: 5 , cantidad: 1 },
      { name: 'Huevo', id: '5l', price: 1, cantidad: 1  },
      { name: 'Queso', id: '6l', price: 1 , cantidad: 1 },
      { name: 'Agua 500ml', id: '7l', price: 5, cantidad: 1 },
      { name: 'Agua 750ml', id: '8l', price: 8 , cantidad: 1 },
      { name: 'Gaseosa 500ml', id: '9l', price: 7, cantidad: 1  },
      { name: 'Gaseosa 750ml', id: '10l', price: 10, cantidad: 1  },
    ]
  }
}

      // {
      //   name: 'Hamburguesas',
      //   items: [
      //     { type: 'Simple', price: 10 },
      //     { type: 'Doble', price: 15 }
      //   ]
      // },
      // {
      //   name: 'Acompañamientos',
      //   items: [
      //     { type: 'Papas fritas', price: 5 },
      //     { type: 'Onion Rings', price: 5 },
      //     { type: 'Huevo', price: 1},
      //     { type: 'Queso', price: 1 },
      //   ]
      // },
      // {
      //   name: 'Bebidas',
      //   items:
      //     [{
      //       type: 'Agua',
      //       sizes: [
      //          { medida: '500ml', price: 5 },
      //          { medida: '750ml', price: 8 },
      //         ]
      //       },
      //       {
      //       type: 'Gaseosa',
      //       sizes: [
      //         { medida: '500ml', price: 7 },
      //         { medida: '750ml', price: 10 },
      //     ]
      //     }
      //   ]
      // }