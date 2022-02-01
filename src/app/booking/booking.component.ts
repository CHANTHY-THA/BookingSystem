import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  filterValue: string = '';
  constructor() { }
  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['customer', 'phone', 'email', 'address','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // ========Search==========
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  customer: string;
  phone: string;
  email: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { customer: 'Phearak', phone: '1111111111111' , email: 'info@gmail.com', address: 'KPC' },
  { customer: 'Lyhor', phone: '222222222222' , email: 'info@gmail.com', address: 'PP' },
  { customer: 'Chanthy tha', phone: '333333333333' , email: 'info@gmail.com', address: 'BTB' },
  { customer: 'Pisan', phone: '4444444444' , email: 'pisan@gmail.com', address: 'Phnom Penh sfsf' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh ' },

];

