import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Municipalidad } from './municipalidad';

describe('Municipalidad', () => {
  let component: Municipalidad;
  let fixture: ComponentFixture<Municipalidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Municipalidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Municipalidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
