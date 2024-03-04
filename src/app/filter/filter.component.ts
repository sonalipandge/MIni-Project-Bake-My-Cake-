import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  cakeName: string = ' ';

  @Output()
  filterTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  filterMethod() {
    this.filterTextChanged.emit(this.cakeName);
  }
}
