import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dh-radioset',
  templateUrl: './radioset.component.html',
  styleUrls: ['./radioset.component.css']
})
export class RadiosetComponent implements OnInit {

  items = ["abc", "def", "tri"];
  selected = -1;
  tick: HTMLElement;
  host: HTMLElement;

  constructor(elt: ElementRef) {
    this.host = <HTMLElement>elt.nativeElement;
  }

  private getCrossElt(index: number) {
    return <HTMLElement>this.host.children.item(0).children.item(index).children.item(0);
  }

  private animateUnselected(index: number, dir: boolean) { // true = slide it down
    if (index < 0) return;
    const elt = this.getCrossElt(index);
    const top = dir ? 12 - 48 : 12 + 48;
    elt.style.top = top + "px";
    elt.style.display = "block";
    setTimeout(() => {
      elt.style.top = "12px";
      elt.style.opacity = "1";
    })
  }

  private animateSelected(index: number, dir: boolean) { // true = slide it down
    if (index < 0) return;
    const elt = this.getCrossElt(index);
    const top = dir ? 12 + 48 : 12 - 48;
    elt.style.top = top + "px";
    elt.style.opacity = "0";
    setTimeout(() => {
      elt.style.display = "none";
    }, 300);
  }

  select(index: number) {
    if (index === this.selected) return;
    this.tick.style.opacity = "1";
    this.tick.style.top = (48 * index + 12) + "px";
    this.animateUnselected(this.selected, index > this.selected);
    this.animateSelected(index, this.selected < 0 ? true : index > this.selected);
    this.selected = index;
  }

  ngOnInit() {
    this.tick = <HTMLElement>this.host.children.item(1);
  }

}
