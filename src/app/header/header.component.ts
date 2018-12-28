import { Component, OnInit, Output, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { slideLeft, slideDown } from '../app.animations';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideLeft, slideDown]
})
export class HeaderComponent implements OnInit, OnChanges {

  @Output() headerHeight = new EventEmitter();

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.sendHeight();
    this.elem.nativeElement.innerHTML = this.elem.nativeElement.innerHTML.replace('<header ', '<header @slideDown ');
    console.log(this.elem.nativeElement);

  }

  ngOnChanges() {
    if (window.screenY > 0) {
      this.elem.nativeElement.firstChild.style.top = '0';

      this.sendHeight();
    }
  }

  sendHeight() {
    this.headerHeight.emit(this.elem.nativeElement.firstChild.clientHeight);
  }
}
