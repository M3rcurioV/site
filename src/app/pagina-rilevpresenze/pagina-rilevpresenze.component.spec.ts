import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRilevpresenzeComponent } from './pagina-rilevpresenze.component';

describe('PaginaRilevpresenzeComponent', () => {
  let component: PaginaRilevpresenzeComponent;
  let fixture: ComponentFixture<PaginaRilevpresenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaRilevpresenzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRilevpresenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
