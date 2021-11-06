import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumAssignerComponent } from './album-assigner.component';

describe('AlbumAssignerComponent', () => {
  let component: AlbumAssignerComponent;
  let fixture: ComponentFixture<AlbumAssignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumAssignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumAssignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
