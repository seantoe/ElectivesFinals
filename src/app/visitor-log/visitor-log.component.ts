// visitor-log.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Import your data service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class VisitorLogComponent implements OnInit {
  newVisitor: { name: string; visitDate: string } = { name: '', visitDate: '' };
  visitorName: string = '';
  visitorPurpose: string = '';
  
  visitorLogs!: any[];

  constructor(private dataService: DataService) {
    this.visitorLogs = [];
   }

  ngOnInit(): void {
    this.loadVisitorLogs();
  }

  loadVisitorLogs() {
    this.dataService.getVisitorLogs().subscribe(data => {
      this.visitorLogs = data;
    });
  }

  addVisitor(): void {
    // Create a visitor object with the entered information
    const newVisitor = {
      name: this.visitorName,
      purpose: this.visitorPurpose
    };
    console.log('New Visitor:', newVisitor);
    // Clear the form fields after adding the visitor
    this.visitorName = '';
    this.visitorPurpose = '';
  }
}
