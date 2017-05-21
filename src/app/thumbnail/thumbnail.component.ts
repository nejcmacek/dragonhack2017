import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dh-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() src: string

  constructor() { }

  ngOnInit() {
  }

}
