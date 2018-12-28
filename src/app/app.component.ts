import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() headerHeight: number;

  getHeaderHeight(event: Event) {
    this.headerHeight = parseFloat(event.toString());
  }
}
