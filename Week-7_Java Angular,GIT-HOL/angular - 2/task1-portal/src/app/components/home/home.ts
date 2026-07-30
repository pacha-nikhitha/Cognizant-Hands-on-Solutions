import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Task 1 required properties
  portalName: string = 'Student Course Portal';
  isPortalActive: boolean = true;
  message: string = '';
  searchTerm: string = '';

  // Course list catalog
  courses: Course[] = [
    { id: 1, title: 'Angular 20 Complete Guide', category: 'Angular', instructor: 'Google Experts' },
    { id: 2, title: 'Mastering TypeScript & Modern JS', category: 'TypeScript', instructor: 'Dan Abramov' },
    { id: 3, title: 'Java Spring Boot Microservices', category: 'Java', instructor: 'Chad Darby' },
    { id: 4, title: 'Angular Reactive Forms & RxJS', category: 'Angular', instructor: 'Deborah Kurata' },
    { id: 5, title: 'Java Core Fundamentals', category: 'Java', instructor: 'Tim Buchalka' }
  ];

  // Enrolled courses list
  enrolledCourses: Course[] = [];

  // Helper method for filtering courses based on searchTerm (using 2-way bound value)
  get filteredCourses(): Course[] {
    if (!this.searchTerm.trim()) {
      return this.courses;
    }
    const term = this.searchTerm.toLowerCase();
    return this.courses.filter(c => 
      c.title.toLowerCase().includes(term) || 
      c.category.toLowerCase().includes(term)
    );
  }

  // Check if course is already enrolled
  isEnrolled(courseId: number): boolean {
    return this.enrolledCourses.some(c => c.id === courseId);
  }

  // Task 1 required event handler method
  onEnrollClick(course?: Course): void {
    if (course) {
      if (!this.isEnrolled(course.id)) {
        this.enrolledCourses.push(course);
        this.message = `Enrollment successful! You have enrolled in "${course.title}".`;
      }
    } else {
      // Default fallback for single generic enroll button if clicked
      this.message = 'Enrollment opened!';
    }
  }

  togglePortalStatus(): void {
    this.isPortalActive = !this.isPortalActive;
    this.message = this.isPortalActive ? 'Portal is now ACTIVE.' : 'Portal is currently INACTIVE.';
  }

  setSearch(term: string): void {
    this.searchTerm = term;
  }
}

/* 
 15. Explanation of Binding Types:
 ---------------------------------
 [property] (Property Binding - One-Way: Component -> DOM):
 Data flows strictly from the TypeScript component class to the DOM element's target property.
 Changes in component state automatically reflect in the DOM, but user changes in the DOM do not update component property.
 Example: [disabled]="!isPortalActive || isEnrolled(course.id)"

 [(ngModel)] (Two-Way Binding: DOM <-> Component):
 Data flows bi-directionally between the TypeScript component property and the DOM element (e.g., input field).
 When component state updates, the DOM input updates; conversely, when a user types in the input field, the component state updates instantly.
 It combines property binding [ngModel] and event binding (ngModelChange).
 Example: [(ngModel)]="searchTerm"
*/
