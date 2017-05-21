import { Component, Inject, OnInit, ElementRef, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'dh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabNames: string[];
  tabs: HTMLElement[];
  elt: HTMLElement;
  sIndex = 0;
  content: HTMLElement;

  @Output()
  selectedIndexChange = new EventEmitter<number>();

  set selectedIndex(val) {
    // console.log("select", val, this.sIndex)
    this.select(val);
  }
  @Input()
  get selectedIndex() {
    return this.sIndex;
  }

  constructor(elt: ElementRef) {
    this.elt = elt.nativeElement;
  }

  select(index: number) {
    // console.log(index, this.content);
    if (!this.tabs || !this.content) { return; }
    this.sIndex = index;
    if (index < 0) { return; }
    const eltPrev = this.tabs[this.sIndex];
    const elt = this.tabs[index];
    this.content.style.height = elt.clientHeight + "px";
    this.selectedIndexChange.emit(this.sIndex);
    // this.selectedIndexChange.emit("selected", this.sIndex);
  }

  ngOnInit() {
    this.tabs = [];
    this.content = this.elt.children[1] as HTMLElement;
    const parent = <HTMLElement>this.elt.children.item(1);
    // console.log(parent.children);
    for (let i = 0; i < parent.children.length; i++) {
      this.tabs.push(<HTMLElement>parent.children.item(i));
    }
    this.tabNames = this.tabs.filter(t => !!t).map(t => t.getAttribute("label"));
    // this.updateSelectedIndex();
    this.select(this.sIndex);
  }

}
