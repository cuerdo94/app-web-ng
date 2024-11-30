import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input() placeholder: string = "";
  @Output()
  onNewCharacter: EventEmitter<string> = new EventEmitter<string>();
  private typingTimer: any; // Timer para manejar el retraso
  private typingDelay: number = 500; // Tiempo de espera en milisegundos (500 ms)
  public inputValue: string = ''; // Propiedad para enlazar con el input


  onKeyUp(event: KeyboardEvent) {
    const input = (event.target as HTMLInputElement).value;
    // Limpiar el timer anterior si sigue activo
    clearTimeout(this.typingTimer);

    // Verificar si se presionó la tecla Enter
    if (event.key === 'Enter') {
      this.emit(input); // Emitir inmediatamente
    }
    else {
      // Configurar un nuevo timer
      this.typingTimer = setTimeout(() => {
        this.emit(input); // Emitir inmediatamente
      }, this.typingDelay);
    }
  }


  private emit(input: string) {
    console.log(input);
    this.onNewCharacter.emit(input);
    this.inputValue = '';
  }
}
