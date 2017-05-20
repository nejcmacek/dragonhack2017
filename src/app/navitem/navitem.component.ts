import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})
export class NavitemComponent implements OnInit {
  href: string;

  constructor(elm: ElementRef) {
    this.href = elm.nativeElement.getAttribute('href'); 
  }

  ngOnInit() {
  }

}
