import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characters: Character[] = [
    { ui: uuidv4(), name: 'Goku', power: 100 },
    { ui: uuidv4(), name: 'Vegeta', power: 120 },
    { ui: uuidv4(), name: 'Trunks', power: 150 }

  ]
  public onDelete(i: number) {
    this.characters.splice(i, 1);
  };

  public onDeleteUUID(uuid: string) {
    console.log(this.characters.length)
    this.characters = this.characters.filter(character => {
      console.log("Character UI:", character.ui);
      console.log("UUID to delete:", uuid);
      return character.ui !== uuid;
    });
    console.log(this.characters.length)
  }

  public onNewCharacter(character: Character) {
    this.characters.push({ ui: uuidv4(), ...character });
  }
}