import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificheComponent } from './specifiche.component';

describe('SpecificheComponent', () => {
  let component: SpecificheComponent;
  let fixture: ComponentFixture<SpecificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
