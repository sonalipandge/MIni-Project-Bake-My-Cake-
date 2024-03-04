import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';

import { AuthGuard } from './services/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CanDeactivateGuard } from './can-deactivate.guard';


const routes: Routes = [
  { path: "", component: HomeComponent },
 
  { path: "login", component: LoginComponent },
  { path: "cake-requests", component: CakeRequestsComponent, canActivate: [AuthGuard] },
  { path: "cake-cart/:id", component: CakeCartComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "**", component: NotFoundComponent },
  
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
