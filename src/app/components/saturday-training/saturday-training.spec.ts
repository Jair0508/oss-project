import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturdayTraining } from './saturday-training';

describe('SaturdayTraining', () => {
  let component: SaturdayTraining;
  let fixture: ComponentFixture<SaturdayTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturdayTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaturdayTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
