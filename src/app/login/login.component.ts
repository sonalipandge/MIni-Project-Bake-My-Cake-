import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.guard';
import { RouteService } from '../services/route.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  cakeOrderCode: string = '';

  constructor(
    private authService: AuthService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {}

  validateCakeOrderCode() {
    this.authService.login(this.cakeOrderCode);
    if (this.authService.isLoggedIn) {
      this.routeService.navigateToCakeRequestsView();
    }
  }
}
