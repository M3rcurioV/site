import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaManutenzioneComponent } from './pagina-manutenzione.component';

describe('PaginaManutenzioneComponent', () => {
  let component: PaginaManutenzioneComponent;
  let fixture: ComponentFixture<PaginaManutenzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaManutenzioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaManutenzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
