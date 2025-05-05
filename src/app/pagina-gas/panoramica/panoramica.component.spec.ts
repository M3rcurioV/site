import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramicaGasComponent } from './panoramica.component';

describe('PanoramicaComponent', () => {
  let component: PanoramicaGasComponent;
  let fixture: ComponentFixture<PanoramicaGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramicaGasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoramicaGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
