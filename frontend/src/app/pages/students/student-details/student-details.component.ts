import { Component } from '@angular/core';
import { StudentInfoComponent } from '../components/student-info/student-info.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [StudentInfoComponent],
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  studentId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id')!;
    console.log('ID do estudante:', this.studentId);
  }
}
