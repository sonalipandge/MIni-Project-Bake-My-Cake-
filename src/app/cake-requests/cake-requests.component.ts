import { Component, OnInit, ViewChild } from '@angular/core';
import { CakeRequest } from '../models/cake-request';
import { CakeRequestService } from '../services/cake-request.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css'],
})
export class CakeRequestsComponent implements OnInit {
  displayedColumns: string[] = [
    'dateOfDelivery',
    'customerName',
    'customerEmail',
    'customerPhone',
    'street',
    'city',
    'state',
    'cakeName',
    'quantity',
    'totalPrice',
  ];

  cakeRequest: CakeRequest[] = [];
  dataSource!: MatTableDataSource<CakeRequest>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private cakeRequestService: CakeRequestService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeReqeusts().subscribe({
      next: (data) => {
        this.cakeRequest = data;
        this.dataSource = new MatTableDataSource(this.cakeRequest);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(): void {
    // Handle sorting logic or live announcement here
    this._liveAnnouncer.announce('Sorting changed');
  }
}
