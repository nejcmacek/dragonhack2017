import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  placeholder: string;
  isExtended = false;

  constructor(elm: ElementRef) {
    this.placeholder = elm.nativeElement.getAttribute('placeholder');
  }

  ngOnInit() {
  }

  onClick(){
    this.isExtended = !this.isExtended;
  }

}
