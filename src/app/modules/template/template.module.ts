import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { MainCertificadosComponent } from './pages/main-certificados/main-certificados.component';
import { Certificado1Component } from './components/certificado-1/certificado-1.component';
import { Certificado2Component } from './components/certificado-2/certificado-2.component';
import { Certificado3Component } from './components/certificado-3/certificado-3.component';



@NgModule({
  declarations: [
    CertificadosComponent,
    MainCertificadosComponent,
    Certificado1Component,
    Certificado2Component,
    Certificado3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainCertificadosComponent
  ]
})
export class TemplateModule { }
