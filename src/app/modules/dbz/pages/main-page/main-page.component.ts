import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  characters: Character[] = [
    { name: 'Goku', power: 100 },
    { name: 'Vegeta', power: 120 },
    { name: 'Trunks', power: 150 }

  ]
  onDelete(i: number) {
    console.log("Main " + i);
    this.characters.splice(i, 1); 
  };

  onNewCharacter(character: Character) {

    this.characters.push(character);
  }

}
