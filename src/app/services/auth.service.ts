import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() { }

// auth.service.ts

login(cakeOrderCode: string) {
  this.isLoggedIn = cakeOrderCode === "SP@2023";
}

logout() {
  this.isLoggedIn = false;
}
}
