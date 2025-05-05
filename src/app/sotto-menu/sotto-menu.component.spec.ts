import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoMenuComponent } from './sotto-menu.component';

describe('SottoMenuComponent', () => {
  let component: SottoMenuComponent;
  let fixture: ComponentFixture<SottoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SottoMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SottoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
