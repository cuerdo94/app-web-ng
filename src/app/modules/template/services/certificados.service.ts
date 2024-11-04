import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {

  getTemplate(templateName: string): string {

    return '';
  }

  fillTemplate(template: string, parameters: { [key: string]: any }): string {
    // Reemplazar los parámetros en la plantilla
    Object.keys(parameters).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, parameters[key]);
    });
    return template;
  }
}
