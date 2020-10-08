import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedTimelineModalComponent } from './estimated-timeline-modal.component';

describe('EstimatedTimelineModalComponent', () => {
  let component: EstimatedTimelineModalComponent;
  let fixture: ComponentFixture<EstimatedTimelineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedTimelineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedTimelineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
