import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  URL: string = "http://localhost:3000/cakes";
  constructor(private http: HttpClient) { }

  getAllCakes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL)
  }

  getCake(id?: string) : Observable<Cake>{
    console.log(id);
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }
}
