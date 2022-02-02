import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { customer } from '../interface/dataType';
import { DataListService } from '../services/data-list.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  customer: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  hide = true;
  animal: string = '';
  name: string = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private newCustomer: DataListService,
  ) { }

  ngOnInit(): void {

  }

  // ==============Get value from input==============
  createCustomer() {
    let customer: customer = {
      customer: this.customer,
      phone: this.phone,
      email: this.email,
      address: this.address
    }

    if (this.customer == '' || this.phone == '' || this.email == '' || this.address == '') {
      
    } else {
      this.newCustomer.addItem(customer);
    }

  }

  // ===============Update item===============
  // updateItem(element: any){
  //   console.log(element);
  // }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
    });
  }
}


