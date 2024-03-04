import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css'],
})
export class CakeListComponent implements OnInit {
  cakes: Array<Cake> = [];

  constructor(private cakeService: CakeService) {}

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        this.cakes = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  onSearchTextChanged(cakeName: string) {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (cakeName || cakeName !== '') {
          this.cakes = data.filter((cake) =>
            cake.cakeName?.toLowerCase().includes(cakeName.toLowerCase())
          );
        } else this.cakes = data;
      },
      error: (e) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }
  onFilterTextChanged(cakeName: string) {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (cakeName || cakeName !== '') {
          this.cakes = data.filter((cake) =>
            cake.cakeName?.toLowerCase().includes(cakeName.toLowerCase())
          );
        } else this.cakes = data;
      },
      error: (e) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }
}
