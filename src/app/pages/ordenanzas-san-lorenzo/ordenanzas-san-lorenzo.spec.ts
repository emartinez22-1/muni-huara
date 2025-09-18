import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenanzasSanLorenzo } from './ordenanzas-san-lorenzo';

describe('OrdenanzasSanLorenzo', () => {
  let component: OrdenanzasSanLorenzo;
  let fixture: ComponentFixture<OrdenanzasSanLorenzo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenanzasSanLorenzo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenanzasSanLorenzo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
