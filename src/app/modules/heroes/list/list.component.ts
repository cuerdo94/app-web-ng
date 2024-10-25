import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heros: string[] = ["Batman", "Iron Man", "Superman"];

  deleteElement(): void {
    this.heros.pop();
  }

}
