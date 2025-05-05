import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGasComponent } from './pagina-gas.component';

describe('PaginaGasComponent', () => {
  let component: PaginaGasComponent;
  let fixture: ComponentFixture<PaginaGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaGasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
