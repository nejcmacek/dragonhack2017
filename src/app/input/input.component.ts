import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  type: string;
  placeholder: string;
  empty = true;
  elt: HTMLElement;
  value: any;

  constructor(elt: ElementRef) {
    this.type = elt.nativeElement.getAttribute("type") || "text";
    this.placeholder = elt.nativeElement.getAttribute("placeholder") || "";
    this.elt = elt.nativeElement;
    this.elt.classList.add("empty");
  }

  onFocus() {
    this.elt.classList.add("focused");
  }

  onBlur() {
    this.checkEmpty();
    this.elt.classList.remove("focused");
  }

  checkEmpty() {
    console.log(this.value);
    const empty = !this.value;
    if (empty) {
      this.elt.classList.add("empty");
    } else {
      this.elt.classList.remove("empty");
    }
  }

  ngOnInit() {
  }

}
