import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSurgelatiComponent } from './pagina-surgelati.component';

describe('PaginaSurgelatiComponent', () => {
  let component: PaginaSurgelatiComponent;
  let fixture: ComponentFixture<PaginaSurgelatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSurgelatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSurgelatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
