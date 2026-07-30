import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {
  // Step 19: Define 3 hardcoded courses to pass to CourseCardComponents
  course1 = { title: 'Angular 20 Essentials', category: 'Frontend', instructor: 'Google Experts' };
  course2 = { title: 'Mastering TypeScript', category: 'Language', instructor: 'Dan Abramov' };
  course3 = { title: 'Java Microservices', category: 'Backend', instructor: 'Chad Darby' };
}
