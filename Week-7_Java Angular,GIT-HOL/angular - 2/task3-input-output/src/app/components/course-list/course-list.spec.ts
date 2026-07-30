import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 course cards', () => {
    const cardElements = fixture.nativeElement.querySelectorAll('app-course-card');
    expect(cardElements.length).toBe(5);
  });

  it('should handle onEnroll and update selectedCourseId', () => {
    component.onEnroll(102);
    fixture.detectChanges();
    expect(component.selectedCourseId).toBe(102);
    const selectionText = fixture.nativeElement.querySelector('.selection-display p');
    expect(selectionText.textContent).toContain('Selected course ID: 102');
  });
});
