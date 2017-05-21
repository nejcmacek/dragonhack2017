import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dh-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  sel = "";

  @Input()
  get selected() {
    return this.sel;
  }
  @Output() selectedChange = new EventEmitter<string>();

  set selected(val) {
    this.sel = val;
    console.log(val);
    this.selectedChange.emit(this.sel);
  }

  constructor() { }

  ngOnInit() {
  }

}
