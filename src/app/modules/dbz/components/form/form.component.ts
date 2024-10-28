import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  charact: Character = {
    name: '',
    power: 0
  }
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  submitForm(): void {
    console.log(this.charact);
    this.onNewCharacter.emit(this.charact);
    this.charact = { name: "", power: 0 };
  }

}
