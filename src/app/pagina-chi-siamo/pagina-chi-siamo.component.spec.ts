import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaChiSiamoComponent } from './pagina-chi-siamo.component';

describe('PaginaChiSiamoComponent', () => {
  let component: PaginaChiSiamoComponent;
  let fixture: ComponentFixture<PaginaChiSiamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaChiSiamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaChiSiamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
