import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiligreeBottomComponent } from './filigree-bottom.component';

describe('FiligreeBottomComponent', () => {
  let component: FiligreeBottomComponent;
  let fixture: ComponentFixture<FiligreeBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiligreeBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiligreeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
