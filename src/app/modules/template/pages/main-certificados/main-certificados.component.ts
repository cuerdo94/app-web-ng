import { Component } from '@angular/core';

@Component({
  selector: 'app-main-certificados',
  templateUrl: './main-certificados.component.html',
  styleUrl: './main-certificados.component.css'
})
export class MainCertificadosComponent {
  selectedTemplate: string | null = null;

  onTemplateSelected(template: string): void {
    this.selectedTemplate = template;
  }

  printTemplate(): void {
    const elementToPrint = document.getElementById(this.selectedTemplate!);
    if (elementToPrint) {
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Imprimir Certificado</title></head><body>');
        printWindow.document.write(elementToPrint.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  }
}
