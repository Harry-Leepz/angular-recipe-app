import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  featureSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // Customer event emitter that emits the the string passed
  //as a parameter when the on click function is being called.
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
