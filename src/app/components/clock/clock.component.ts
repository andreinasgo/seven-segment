import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() value: number;

  date: Date;
  h1: number;
  h2: number;
  m1: number;
  m2: number;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.getHours();
    this.getMinutes();

    setInterval(() => {
      this.date = new Date();
      this.getHours();
      this.getMinutes();
    }, 10000);
  }

  getHours() {
    const hours = this.date.getHours().toString().split('');
    if (hours.length > 1) {
      this.h1 = +hours[0];
      this.h2 = +hours[1];
    } else {
      this.h1 = 0;
      this.h2 = +hours[0];
    }
  }

  getMinutes() {
    const minutes = this.date.getMinutes().toString().split('');
    if (minutes.length > 1) {
      this.m1 = +minutes[0];
      this.m2 = +minutes[1];
    } else {
      this.m1 = 0;
      this.m2 = +minutes[0];
    }
  }

}
