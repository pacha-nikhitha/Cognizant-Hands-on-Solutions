import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, Course } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {
  courses: Course[] = [
    { id: 101, name: 'Angular Framework Masterclass', code: 'CS-401', credits: 4 },
    { id: 102, name: 'TypeScript Architecture', code: 'CS-402', credits: 3 },
    { id: 103, name: 'Java Spring Boot Microservices', code: 'CS-403', credits: 4 },
    { id: 104, name: 'RxJS & State Management', code: 'CS-404', credits: 3 },
    { id: 105, name: 'Web Application Security', code: 'CS-405', credits: 2 }
  ];

  selectedCourseId: number | null = null;
  enrolledCourseIds: Set<number> = new Set<number>();
  successMessage: string = '';

  isEnrolled(id: number): boolean {
    return this.enrolledCourseIds.has(id);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
    this.enrolledCourseIds.add(courseId);

    const enrolledCourse = this.courses.find(c => c.id === courseId);
    if (enrolledCourse) {
      this.successMessage = `🎉 Enrollment successful! You are enrolled in ${enrolledCourse.name} (ID: ${courseId}).`;
    }
  }
}
