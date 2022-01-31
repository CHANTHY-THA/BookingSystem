import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['customer', 'phone', 'email', 'address','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
  { customer: 'Chanthy tha', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfs' },
  { customer: 'Chanthy thaggggggggggggggggggggggdgdgdgggd', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsfsdfsf' },
  { customer: 'Chanthy thaggggggggggggggggdgdgdgggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsdfsf' },
  { customer: 'Chanthy thagggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsf' },
  { customer: 'Chanthy thagggggggggggggdgggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsf' },
  { customer: 'Chanthy thaggggggggggggggggggggggdgggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsffsf sfsf' },
  { customer: 'Chanthy thaggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsf' },
  { customer: 'Chanthy thaggggggggggggggggggggggdgggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf sfsfsdfsf sfsf' },
  { customer: 'Chanthy thagggggggggggdgggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsff sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },
  { customer: 'Chanthy thagggggggggggggggggdgdgdg', phone: '098765gdg433' , email: 'info@gmail.com', address: 'Phnom Penh fdffsf fsfsfsf fsfsfs fsfsfsdf f sfsf' },

];

