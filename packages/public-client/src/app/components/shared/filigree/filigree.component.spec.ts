import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiligreeComponent } from './filigree.component';

describe('FiligreeComponent', () => {
  let component: FiligreeComponent;
  let fixture: ComponentFixture<FiligreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiligreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiligreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
