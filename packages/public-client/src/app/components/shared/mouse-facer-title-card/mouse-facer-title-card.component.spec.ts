import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFacerTitleCardComponent } from './mouse-facer-title-card.component';

describe('MouseFacerTitleCardComponent', () => {
  let component: MouseFacerTitleCardComponent;
  let fixture: ComponentFixture<MouseFacerTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseFacerTitleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseFacerTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
