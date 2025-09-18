import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionesConsejoMunicipal } from './reuniones-consejo-municipal';

describe('ReunionesConsejoMunicipal', () => {
  let component: ReunionesConsejoMunicipal;
  let fixture: ComponentFixture<ReunionesConsejoMunicipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionesConsejoMunicipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionesConsejoMunicipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
