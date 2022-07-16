import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiligreeTopComponent } from './filigree-top.component';

describe('FiligreeTopComponent', () => {
  let component: FiligreeTopComponent;
  let fixture: ComponentFixture<FiligreeTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiligreeTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiligreeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
