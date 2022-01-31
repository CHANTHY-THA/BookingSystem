import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  customer:string = '';
  phone:string = '';
  email:string = '';
  address:string = '';
  hide = true;
  animal: string = '';
  name: string = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  
  createCustomer(){
    let customerList = [];
    let newCustomer = {
      customer: this.customer,
      phone: this.phone,
      email: this.email,
      address: this.address
    }
    
    customerList.push(newCustomer);
    return customerList;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };


  openSnakbar() {
    this.snackBar.open("Success", 'Dissmiss', {duration: 2500});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {

      this.animal = result;
    });
  }
}


