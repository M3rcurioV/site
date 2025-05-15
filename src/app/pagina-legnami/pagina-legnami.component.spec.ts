import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLegnamiComponent } from './pagina-legnami.component';

describe('PaginaLegnamiComponent', () => {
  let component: PaginaLegnamiComponent;
  let fixture: ComponentFixture<PaginaLegnamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaLegnamiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaLegnamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
