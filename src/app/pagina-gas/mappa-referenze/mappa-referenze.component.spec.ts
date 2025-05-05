import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaReferenzeComponent } from './mappa-referenze.component';

describe('MappaReferenzeComponent', () => {
  let component: MappaReferenzeComponent;
  let fixture: ComponentFixture<MappaReferenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MappaReferenzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappaReferenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
