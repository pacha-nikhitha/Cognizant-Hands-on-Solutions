import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = { id: 101, name: 'Test Course', code: 'TC-101', credits: 3 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit enrollRequested event when button is clicked', () => {
    spyOn(component.enrollRequested, 'emit');
    const button = fixture.nativeElement.querySelector('.btn-enroll');
    button.click();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(101);
  });
});
