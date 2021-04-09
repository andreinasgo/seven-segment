import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnChanges {
  @Input() value: number;

  segments = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false
  };

  constructor() { }

  ngOnChanges() {
    this.deactivateAll();
    this.setTime();
  }

  activateZero() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.c = true;
    this.segments.d = true;
    this.segments.e = true;
    this.segments.f = true;
  }

  activateOne() {
    this.segments.b = true;
    this.segments.c = true;
  }

  activateTwo() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.d = true;
    this.segments.e = true;
    this.segments.g = true;
  }

  activateThree() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.c = true;
    this.segments.d = true;
    this.segments.g = true;
  }

  activateFour() {
    this.segments.b = true;
    this.segments.c = true;
    this.segments.f = true;
    this.segments.g = true;
  }

  activateFive() {
    this.segments.a = true;
    this.segments.c = true;
    this.segments.d = true;
    this.segments.f = true;
    this.segments.g = true;
  }

  activateSix() {
    this.segments.a = true;
    this.segments.c = true;
    this.segments.d = true;
    this.segments.e = true;
    this.segments.f = true;
    this.segments.g = true;
  }

  activateSeven() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.c = true;
  }

  activateEight() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.c = true;
    this.segments.d = true;
    this.segments.e = true;
    this.segments.f = true;
    this.segments.g = true;
  }

  activateNine() {
    this.segments.a = true;
    this.segments.b = true;
    this.segments.c = true;
    this.segments.f = true;
    this.segments.g = true;
  }

  deactivateAll() {
    this.segments.a = false;
    this.segments.b = false;
    this.segments.c = false;
    this.segments.d = false;
    this.segments.e = false;
    this.segments.f = false;
    this.segments.g = false;
  }

  setTime() {
    switch(this.value) {
      case 0:
        this.activateZero();
        break;
      case 1:
        this.activateOne();
        break;
      case 2:
        this.activateTwo();
        break;
      case 3:
        this.activateThree();
        break;
      case 4:
        this.activateFour();
        break;
      case 5:
        this.activateFive();
        break;
      case 6:
        this.activateSix();
        break;
      case 7:
        this.activateSeven();
        break;
      case 8:
        this.activateEight();
        break;
      case 9:
        this.activateNine();
        break;
    }
  }

}
