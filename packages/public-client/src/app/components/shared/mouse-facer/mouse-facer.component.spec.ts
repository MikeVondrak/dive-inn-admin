import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseFacerComponent } from './mouse-facer.component';

describe('MouseFacerComponent', () => {
  let component: MouseFacerComponent;
  let fixture: ComponentFixture<MouseFacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseFacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseFacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
