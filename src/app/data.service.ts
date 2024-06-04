// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getVisitorLogs(): Observable<any[]> {
    // Mock data
    return of([
      { name: 'John Doe', visitDate: '06/04/2024', entryTime: '10:00 AM' },
      { name: 'Jane Smith', visitDate: '06/04/2024', entryTime: '11:30 AM' }
      // Add more data as needed
    ]);
  }

  getStudentViolations(): Observable<any[]> {
    // Mock data
    return of([
      { studentName: 'Alice Johnson', violationDate: '23/09/2024', description: 'Outdated ID' },
      { studentName: 'Bob Williams', violationDate: '23/09/2024', description: 'Uniform violation' }
      // Add more data as needed
    ]);
  }
}
