import { Component, Input, EventEmitter, output, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  list: Character[] = []

  @Output()
  onDeleteEvent: EventEmitter<number> = new EventEmitter<number>();

  onDelete(i: number): void {
    console.log(i)
    this.onDeleteEvent.emit(i)
  }
}
