import { Component, OnInit, ElementRef, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dh-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  placeholder: string;
  isExtended = false;
  sel = "";
  options = ["a", "b", "c"]

  @Input()
  get selected() {
    return this.sel;
  }
  @Output() selectedChange = new EventEmitter<string>();

  set selected(val) {
    this.sel = val;
    this.selectedChange.emit(this.sel);
  }

  constructor(elm: ElementRef) {
    this.placeholder = elm.nativeElement.getAttribute('placeholder');
  }

  itemClicked(opt: string) {
    this.selected = opt;
    this.isExtended = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.isExtended = !this.isExtended;
  }

}
