import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGioiellerieComponent } from './pagina-gioiellerie.component';

describe('PaginaGioiellerieComponent', () => {
  let component: PaginaGioiellerieComponent;
  let fixture: ComponentFixture<PaginaGioiellerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaGioiellerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGioiellerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
