import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { customer } from '../interface/dataType';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { DataListService } from '../services/data-list.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  filterValue: string = '';

  listItems: customer[] = [] ;

  constructor(private listItem: DataListService,private snackBar: MatSnackBar, public dialog: MatDialog, ) { }
  ngOnInit(): void {
    this.displayItem();
  }

  displayItem(){
    this.listItems = this.listItem.getItemList();
    this.dataSource = new MatTableDataSource(this.listItems);
  }

  displayedColumns: string[] = ['no','customer', 'phone', 'email', 'address','action'];
  dataSource! : MatTableDataSource<any>;

  // ========Search==========
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteItem(id: number){
    console.log(id);
    this.listItem.removeItem(id);
    this.displayItem();
    this.snackBar.open("Deleted", 'Dissmiss', {duration: 2500});
  }

  updatedataItem(element: any){
    console.log(element); 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '300px',
    });
  }
}




