
import { Component } from '@angular/core';

@Component({
  selector: "app-counter",
  template: `
  <h1>Contador {{counter}}</h1>
  <button (click)="incrementCounterByValue(5)">+5</button>
  
  <button (click)="incrementCounter()">+1</button>
  <button (click)="decrementCounter()">-1</button>`,
})
export class CounterComponent {

  counter = 0;

  incrementCounter(): void {
    this.counter++;
  }
  incrementCounterByValue(value: number): void {
    this.counter += value;
  }
  decrementCounter(): void {
    this.counter--;
  }
}