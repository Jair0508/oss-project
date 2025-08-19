import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEvents } from './courses-events';

describe('CoursesEvents', () => {
  let component: CoursesEvents;
  let fixture: ComponentFixture<CoursesEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
