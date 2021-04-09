import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClockComponent } from './components/clock/clock.component';
import { ColonComponent } from './components/colon/colon.component';
import { SegmentComponent } from './components/segment/segment.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ColonComponent,
    SegmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
