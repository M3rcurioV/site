import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAbbigliamentoComponent } from './pagina-abbigliamento.component';

describe('PaginaAbbigliamentoComponent', () => {
  let component: PaginaAbbigliamentoComponent;
  let fixture: ComponentFixture<PaginaAbbigliamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAbbigliamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAbbigliamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
