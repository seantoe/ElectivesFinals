// student-violations.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Import your data service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-violations',
  templateUrl: './student-violations.component.html',
  styleUrls: ['./student-violations.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class StudentViolationsComponent implements OnInit {
  studentViolations!: any[];
  newViolation: { studentName: string; violationDate: string; description: string; } = { studentName: '', violationDate: '', description: '' };
  studentName: string = '';
  violationDate: Date = new Date();
  description: string = '';

  constructor(private dataService: DataService) {
    this.studentViolations = [];
   }

   addViolation(): void {
      const violationWithStudentName = {
        name: this.studentName,
        description: this.description,
        date: this.violationDate
      };
      console.log('Student Violation:', violationWithStudentName)
      this.studentName = '';
      this.violationDate = new Date();
      this.description = ''; 
    }

  ngOnInit(): void {
    this.loadStudentViolations();
  }

  loadStudentViolations() {
    this.dataService.getStudentViolations().subscribe(data => {
      this.studentViolations = data;
    });
  }
}
