import { elementAt } from 'rxjs/operator/elementAt';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  element: HTMLElement;
  animElement: HTMLElement;
  warn: boolean;

  constructor(myElement: ElementRef) {
    this.element = myElement.nativeElement;
    this.element.addEventListener("mouseenter", () => this.onHover());
    this.element.addEventListener("mouseleave", () => this.onHoverEnd());
    this.element.addEventListener("pointerdown", () => this.onClick());
    this.element.addEventListener("pointerup", () => this.onClickEnd());
    if (this.element.hasAttribute("no-margin")) {
      this.element.classList.add("no-margin");
    }
    this.warn = this.element.hasAttribute("warn");
  }

  onHover() {
    const el = document.createElement("div");
    el.classList.add("bg-slide", this.warn ? "bg-warn" : "bg-primary");
    this.element.appendChild(el);
    this.animElement = el;
    setTimeout(() => {
      (<any>el).style = "left: 0; right: 0;opacity: 1";
    });
  }

  onHoverEnd() {
    const elt = this.animElement;
    elt.classList.add("slideout");
    const that = this;
    (<any>elt).style = "opacity: 0;left:50%;right:-50%;";
    setTimeout(function () {
      elt.remove();
      if (that.animElement === elt) {
        that.animElement = null;
      }
    }, 300);
  }

  onClick() {

  }

  onClickEnd() {

  }

  ngOnInit() {
  }

}
