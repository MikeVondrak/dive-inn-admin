import { Component, AfterViewInit } from '@angular/core';
import { AppReadyEvent } from './app-ready-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private appReadyEvent: AppReadyEvent;

  constructor(
    appReady: AppReadyEvent,
  ) {
    this.appReadyEvent = appReady;
  }

  ngAfterViewInit(): void {
    this.appReadyEvent.trigger(); // remove the "Loading..." overlay when app is ready
  }
}
