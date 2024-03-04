import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  cakeName: string = ' ';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  searchCake() {
    this.searchTextChanged.emit(this.cakeName);
  }
  clearCake() {
    this.cakeName = '';
  }
}
