import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosCirculacion } from './permisos-circulacion';

describe('PermisosCirculacion', () => {
  let component: PermisosCirculacion;
  let fixture: ComponentFixture<PermisosCirculacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisosCirculacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosCirculacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
