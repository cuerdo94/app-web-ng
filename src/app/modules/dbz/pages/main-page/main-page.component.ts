import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DBZService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DBZService) {

  }

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDelete(i: number) {
    this.dbzService.onDelete(i);
  };

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }
  onDeleteUUID(uuid: string) {
    this.dbzService.onDeleteUUID(uuid!);
  }
}
