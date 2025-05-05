import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicazioniComponent } from './applicazioni.component';

describe('ApplicazioniComponent', () => {
  let component: ApplicazioniComponent;
  let fixture: ComponentFixture<ApplicazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
