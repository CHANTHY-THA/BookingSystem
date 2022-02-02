import { Injectable } from '@angular/core';
import { customer } from '../interface/dataType';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
  listItems: customer[] = [
    { customer: 'Phearak', phone: '1111111111111' , email: 'phearak@gmail.com', address: 'KPC' },
    { customer: 'Lyhor', phone: '222222222222' , email: 'lyhor@gmail.com', address: 'PP' },
    { customer: 'Chanthy', phone: '333333333333' , email: 'chanthy@gmail.com', address: 'PP' },
    { customer: 'Chhay', phone: '44444444444' , email: 'chhay@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
    { customer: 'Thin', phone: '55555555555' , email: 'thin@gmail.com', address: 'PP' },
  
  ];
  constructor() { }

  // ======Add new customer===========
  addItem(item: customer){
    console.log(item);
    this.listItems.unshift(item);
  }

  // ======Get customer to display====
  getItemList(){
    return this.listItems.slice();
  }

  // ======Delete customer============
  removeItem(id: number){
    this.listItems.splice(id, 1);
  }
}
