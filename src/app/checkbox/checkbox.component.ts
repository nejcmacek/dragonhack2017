import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  checked = false;
  element: HTMLElement;
  elementTick: HTMLElement;
  elementCross: HTMLElement;

  constructor(elt: ElementRef) {
    this.element = elt.nativeElement;
    this.element.addEventListener("click", () => this.onClick());
  }

  flyIn() {
    this.element.classList.add("checked");
    this.elementTick.style.left = "12px";
    const that = this;
    setTimeout(function () {
      that.elementCross.style.left = "-48px";
    }, 300);
    this.elementCross.style.left = "24px";
  }

  flyOut() {
    this.element.classList.remove("checked");
    const that = this;
    setTimeout(function () {
      that.elementTick.style.left = "-48px";
    }, 300);
    this.elementTick.style.left = "24px";
    this.elementCross.style.left = "12px";
  }

  onClick() {
    if (this.checked) {
      this.flyOut();
    } else {
      this.flyIn();
    }
    this.checked = !this.checked;
  }

  ngOnInit() {
    this.elementTick = <HTMLElement>this.element.children.item(1); // silly, I know
    this.elementCross = <HTMLElement>this.element.children.item(0);
  }

}
