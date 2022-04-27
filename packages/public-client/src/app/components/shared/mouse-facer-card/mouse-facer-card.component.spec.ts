import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFacerCardComponent } from './mouse-facer-card.component';

describe('MouseFacerCardComponent', () => {
  let component: MouseFacerCardComponent;
  let fixture: ComponentFixture<MouseFacerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseFacerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseFacerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
