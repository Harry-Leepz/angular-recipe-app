import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipes';

  // onNavigate listens for the emitted feature sent on the user click and
  // sets the value of loadedFeature to the emitted arguement.
  // *ngIf is used on the component selector to show or hide components
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
