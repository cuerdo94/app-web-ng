import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificado3Component } from './certificado-3.component';

describe('Certificado3Component', () => {
  let component: Certificado3Component;
  let fixture: ComponentFixture<Certificado3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Certificado3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
