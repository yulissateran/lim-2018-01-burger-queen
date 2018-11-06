import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  createItemsBreakfast() {
    return [
      { name: 'Cafe americano', id: '1b', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDol4e9KdI0BfLSeeUVojob0ZfZa7f6LbrF1OIUycQBBRnaKUa' },
      { name: 'Cafe con leche', id: '2b', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhAlM300prRO805is6DVXeZ23afi_uuQ7Yw4GcbyUhZfjtrdxVQ' },
      { name: 'Sandwich de jamón y queso', id: '3b', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ushPz5uU0MvRvPa9VVWTUF3yDgdgOLVsHCQ3iAbjRRW4FJbs' },
      { name: 'Jugo natural', id: '4b', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkMWuGshdkaNmoY756tDc7Cnj11gwS3-m8PYIMw4_crLkugfIog' },
    ]
  }
  createItemsLunch() {
    return [
      { name: 'Hamburguesa simple', id: '1l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa7H3irBv2GKO_XtHDziUQeenjJhOhr6o_C6ycJD4UY2yvNO' },
      { name: 'Hamburguesa doble', id: '2l', price: 15, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhnSP_T5zdX5ZSeZaYF_f4eGrC59ggl-tt-To8t-OxkxAEgls' },
      { name: 'Papas fritas', id: '3l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93VfnsgGtxub3u4XwRz2A9MWzKOitYXhrcDLzqXMkXVC8p5jDpg' },
      { name: 'Onion Rings', id: '4l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDBn7Nm4k0j4hcMoJe7cvdCxhOHfuZIEDG3kOBfCjyulO_fzckA' },

      { name: 'Agua 500ml', id: '7l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdegXLSh1YEDhyOB7JtK9FAL2l0oUH9dtZ8Ma3kJ29FFsiuu4' },
      { name: 'Agua 750ml', id: '8l', price: 8, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdegXLSh1YEDhyOB7JtK9FAL2l0oUH9dtZ8Ma3kJ29FFsiuu4' },
      { name: 'Gaseosa 500ml', id: '9l', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxAASgeCeEOMBXeyHi5JmM5ZtW4QkLjD0IbQknyPXTlCIGYlYFw' },
      { name: 'Gaseosa 750ml', id: '10l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxAASgeCeEOMBXeyHi5JmM5ZtW4QkLjD0IbQknyPXTlCIGYlYFw' },
    ]
  }
  createItemsAll() {
    return [
      { name: 'Cafe americano', id: '1b', price: 5, cantidad: 1, },
      { name: 'Cafe con leche', id: '2b', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhAlM300prRO805is6DVXeZ23afi_uuQ7Yw4GcbyUhZfjtrdxVQ' },
      { name: 'Sandwich de jamón y queso', id: '3b', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ushPz5uU0MvRvPa9VVWTUF3yDgdgOLVsHCQ3iAbjRRW4FJbs' },
      { name: 'Jugo natural', id: '4b', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkMWuGshdkaNmoY756tDc7Cnj11gwS3-m8PYIMw4_crLkugfIog' },
      { name: 'Papas fritas', id: '3l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93VfnsgGtxub3u4XwRz2A9MWzKOitYXhrcDLzqXMkXVC8p5jDpg' },
      { name: 'Onion Rings', id: '4l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDBn7Nm4k0j4hcMoJe7cvdCxhOHfuZIEDG3kOBfCjyulO_fzckA' },
      { name: 'Agua 500ml', id: '7l', price: 5, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdegXLSh1YEDhyOB7JtK9FAL2l0oUH9dtZ8Ma3kJ29FFsiuu4' },
      { name: 'Agua 750ml', id: '8l', price: 8, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdegXLSh1YEDhyOB7JtK9FAL2l0oUH9dtZ8Ma3kJ29FFsiuu4' },
      { name: 'Gaseosa 500ml', id: '9l', price: 7, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxAASgeCeEOMBXeyHi5JmM5ZtW4QkLjD0IbQknyPXTlCIGYlYFw' },
      { name: 'Gaseosa 750ml', id: '10l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxAASgeCeEOMBXeyHi5JmM5ZtW4QkLjD0IbQknyPXTlCIGYlYFw' },
      // { name: 'Hamburguesa doble', id: '5l', price: 15, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhnSP_T5zdX5ZSeZaYF_f4eGrC59ggl-tt-To8t-OxkxAEgls' },
      { name: 'Mega de pollo', id: '11l', price: 15, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhnSP_T5zdX5ZSeZaYF_f4eGrC59ggl-tt-To8t-OxkxAEgls' },
      { name: 'Mega de res', id: '12l', price: 15, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhnSP_T5zdX5ZSeZaYF_f4eGrC59ggl-tt-To8t-OxkxAEgls' },
      { name: 'Mega vegetariana', id: '13l', price: 15, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhnSP_T5zdX5ZSeZaYF_f4eGrC59ggl-tt-To8t-OxkxAEgls' },
      // { name: 'Hamburguesa simple', id: '6l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa7H3irBv2GKO_XtHDziUQeenjJhOhr6o_C6ycJD4UY2yvNO' }, 
      { name: 'Clásica de pollo', id: '14l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa7H3irBv2GKO_XtHDziUQeenjJhOhr6o_C6ycJD4UY2yvNO' },
      { name: 'Clásica de res', id: '15l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa7H3irBv2GKO_XtHDziUQeenjJhOhr6o_C6ycJD4UY2yvNO' },
      { name: 'Clásica vegetariana', id: '16l', price: 10, cantidad: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa7H3irBv2GKO_XtHDziUQeenjJhOhr6o_C6ycJD4UY2yvNO' },

    ]
  }
}
  



