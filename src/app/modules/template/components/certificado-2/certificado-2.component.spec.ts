import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificado2Component } from './certificado-2.component';

describe('Certificado2Component', () => {
  let component: Certificado2Component;
  let fixture: ComponentFixture<Certificado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Certificado2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
