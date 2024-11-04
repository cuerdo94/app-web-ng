import { Component, EventEmitter, Output } from '@angular/core';
import { CertificadosService } from '../../services/certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

  @Output() templateSelected = new EventEmitter<string>();

  loadTemplate(event: Event): void {
    const selectedTemplate = (event.target as HTMLSelectElement).value;
    this.templateSelected.emit(selectedTemplate);
  }
  // template = '';
  // filledTemplate = '';

  // constructor(private templateService: CertificadosService) { }

  // loadTemplate(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const name = input?.value || '';
  //   console.log(name);
  //   // this.template = this.templateService.getTemplate(name);
  //   // this.filledTemplate = this.template; // Inicialmente sin datos
  // }

  // fillTemplate(parameters: { [key: string]: any }) {
  //   this.filledTemplate = this.templateService.fillTemplate(this.template, parameters);
  // }

  // printTemplate() {
  //   window.print();
  // }

}
