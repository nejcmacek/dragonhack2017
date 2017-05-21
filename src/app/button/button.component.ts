import { elementAt } from 'rxjs/operator/elementAt';
import { Component, OnInit, ElementRef, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'dh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {

  element: HTMLElement;
  animElement: HTMLElement;
  warn: boolean;
  toggleable = false;
  @Input()
  toggled = false;
  hoverActive = false;

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
    this.toggleable = this.element.hasAttribute("toggleable");
  }

  updateToggled() {
    if (!this.toggleable) return;
    if (this.toggled) {
      this.onHover();
    } else {
      this.onHoverEnd();
    }
  }

  ngOnChanges(c: SimpleChanges) {
    // console.log(c, this.toggleable, c.toggled);
    if (this.toggleable && c.toggled && !c.toggled.isFirstChange()) {
      this.toggled = c.toggled.currentValue;
      this.updateToggled();
    }
  }

  onHover() {
    if (this.hoverActive) { return; }
    const el = document.createElement("div");
    el.classList.add("bg-slide", this.warn ? "bg-warn" : "bg-primary");
    this.element.appendChild(el);
    this.animElement = el;
    setTimeout(() => {
      (<any>el).style = "left: 0; right: 0; opacity: 1";
    });
    this.hoverActive = true;
  }

  onHoverEnd() {
    if (this.hoverActive && this.toggled || !this.hoverActive) { return; }
    const elt = this.animElement;
    const that = this;
    (<any>elt).style = "opacity: 0; left:50%; right: -50%;";
    setTimeout(function () {
      elt.remove();
      if (that.animElement === elt) {
        that.animElement = null;
      }
    }, 300);
    this.hoverActive = false;
  }

  onClick() {

  }

  onClickEnd() {

  }

  ngOnInit() {
    this.updateToggled();
    // console.log("init");
  }

}
