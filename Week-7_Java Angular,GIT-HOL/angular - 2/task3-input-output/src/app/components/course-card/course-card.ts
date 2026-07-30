import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {
  // Required @Input() for parent-to-child data flow
  @Input() course!: Course;

  // Track if this card's course is enrolled
  @Input() isEnrolled: boolean = false;

  // Required @Output() for child-to-parent event emission
  @Output() enrollRequested = new EventEmitter<number>();
}
