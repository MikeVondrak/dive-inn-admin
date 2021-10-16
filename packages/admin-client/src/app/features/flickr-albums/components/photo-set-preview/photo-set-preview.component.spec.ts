import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSetPreviewComponent } from './photo-set-preview.component';

describe('PhotoSetPreviewComponent', () => {
  let component: PhotoSetPreviewComponent;
  let fixture: ComponentFixture<PhotoSetPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSetPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
