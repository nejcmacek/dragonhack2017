import { SimpleChanges } from '@angular/core/core';
import { Component, OnInit, OnChanges, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnChanges {

  @Input()
  selected: boolean;
  elt: HTMLElement;
  height: number;

  constructor(elt: ElementRef) {
    this.elt = elt.nativeElement;
  }

  makeDisappear() {
    this.height = this.elt.clientHeight;
    this.elt.classList.remove("selected");
    this.elt.style.opacity = "0";
    this.elt.style.maxHeight = "0";
    const that = this;
    setTimeout(function () {
      that.elt.style.display = "none";
    }, 300);
  }

  makeAppear() {
    this.elt.classList.add("selected");
    this.elt.style.display = "block";
    // delete this.elt.style.maxHeight;
    // const h = this.elt.clientHeight;
    // console.log(h);
    // this.elt.style.maxHeight = "0";
    setTimeout(() => {
      this.elt.style.opacity = "1";
      this.elt.style.maxHeight = this.height + "px";
    });
  }

  ngOnChanges(c: SimpleChanges) {
    // console.log(c);
    if (c.selected) {
      if (c.selected.currentValue) {
        this.makeAppear();
      } else {
        this.makeDisappear();
      }
    }
  }

  ngOnInit() {
  }

}
