import { Component, OnInit, ElementRef, OnChanges } from '@angular/core';
import { slideRight, slideLeft } from '../app.animations';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [slideLeft]
})
export class FooterComponent implements OnInit, OnChanges {

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  scrollTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      left: 0,
      behavior: 'smooth'
    });
  }
}
