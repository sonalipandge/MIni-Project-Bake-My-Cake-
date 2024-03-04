import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../models/cake';
import { CakeRequest } from '../models/cake-request';
import { RouteService } from '../services/route.service';
import { CakeRequestService } from '../services/cake-request.service';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css'],
})
export class CakeCartComponent implements OnInit {
  cake?: Cake;
  stars: Array<number> = [];
  cakeRequest: CakeRequest = {};

  submitStatus: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private cakeRequestService: CakeRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id') ?? '';
      this.cakeService.getCake(id).subscribe((data) => {
        this.cake = data;
        this.stars = new Array(this.cake.rating);
        this.submitStatus = false;
      });
    });
  }
  minDate: Date = new Date();
  makeRequest() {
    console.log(this.cakeRequest);
    if (
      this.cakeRequest?.customerName &&
      this.cakeRequest.customerEmail &&
      this.cakeRequest.customerPhone &&
      this.cakeRequest.dateOfDelivery &&
      this.cakeRequest.street &&
      this.cakeRequest.city &&
      this.cakeRequest.state &&
      this.cakeRequest.postalCode &&
      this.cakeRequest.quantity &&
      this.cake?.cakePrice
    ) {
      if (this.cake) {
        const cakePrice = this.cake?.cakePrice;
        this.cakeRequest.totalPrice =
          this.cake?.cakePrice * this.cakeRequest.quantity;
        this.cakeRequest.cakeName = this.cake.cakeName;
        this.cakeRequest.cakePrice = this.cake.cakePrice;

        // Calculate the total price by multiplying cakePrice and quantity
      }
      this.cakeRequestService.saveCakeRequest(this.cakeRequest).subscribe({
        next: (_data) => {
          this.snackBar.open(
            'Request Submitted',
            'total bill is ' + this.cakeRequest.totalPrice,
            {
              duration: 3000,
            }
          );
          this.submitStatus = true;
          this.routeService.navigateToHomeView();
        },

        error: (err) => {
          alert(err);
        },
      });
    }
  }
 
  total() {
    if (this.cakeRequest?.quantity && this.cakeRequest.cakePrice) {
      this.cakeRequest.totalPrice =
        this.cakeRequest.quantity * this.cakeRequest.cakePrice;
    }
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm(
        'You have not submitted a request to this cake. Any details entered will be lost. Are you sure you want to leave?'
      );
    }
    return this.submitStatus;
  }

}
