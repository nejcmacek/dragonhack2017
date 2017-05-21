import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isFixed: boolean;

  constructor(elm: ElementRef) {
    this.isFixed = elm.nativeElement.hasAttribute('fixed');
  }

  ngOnInit() {
  }

}
