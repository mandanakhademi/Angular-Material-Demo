import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Material-Demo';
  isChecked = true;

  onChange($event) {
    console.log($event);
  }
}
