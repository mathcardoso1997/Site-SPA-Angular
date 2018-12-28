import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() currentTop: number;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.elem.nativeElement.firstChild.style.top = this.currentTop.toString().concat('px');
  }

}
