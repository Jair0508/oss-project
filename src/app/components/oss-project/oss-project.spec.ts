import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssProject } from './oss-project';

describe('OssProject', () => {
  let component: OssProject;
  let fixture: ComponentFixture<OssProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OssProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OssProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
