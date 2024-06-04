import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViolationsComponent } from './student-violations.component';

describe('StudentViolationsComponent', () => {
  let component: StudentViolationsComponent;
  let fixture: ComponentFixture<StudentViolationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentViolationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
