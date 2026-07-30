import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  availableCoursesCount: number = 0;

  // Step 16: Implement ngOnInit - fetch/simulate course count and log exact message
  ngOnInit(): void {
    this.availableCoursesCount = 3;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Step 17: Implement ngOnDestroy - log exact message
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
