import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import {
  ViewportScroller
} from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }


  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

}
