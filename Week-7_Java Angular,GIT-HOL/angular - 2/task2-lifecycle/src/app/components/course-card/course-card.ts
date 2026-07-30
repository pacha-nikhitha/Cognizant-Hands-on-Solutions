import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  // Step 18: Add @Input() course property
  @Input() course: any;

  // Step 18: Implement ngOnChanges and log previous and current values
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prevVal = changes['course'].previousValue;
      const currVal = changes['course'].currentValue;
      console.log('ngOnChanges fired for CourseCardComponent -> Previous:', prevVal, '| Current:', currVal);
    }
  }
}
