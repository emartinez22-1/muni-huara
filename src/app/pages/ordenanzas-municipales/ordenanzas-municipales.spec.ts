import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenanzasMunicipales } from './ordenanzas-municipales';

describe('OrdenanzasMunicipales', () => {
  let component: OrdenanzasMunicipales;
  let fixture: ComponentFixture<OrdenanzasMunicipales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenanzasMunicipales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenanzasMunicipales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
