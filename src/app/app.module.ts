import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CakeRequestsComponent,
    CakeCardComponent,
    CakeCartComponent,
    SearchComponent,
    FilterComponent,
    NotFoundComponent,
    CakeCartComponent,
    CakeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatPaginatorModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
