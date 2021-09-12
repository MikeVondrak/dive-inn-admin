import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSetListComponent } from './photo-set-list.component';

describe('PhotoSetListComponent', () => {
  let component: PhotoSetListComponent;
  let fixture: ComponentFixture<PhotoSetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
