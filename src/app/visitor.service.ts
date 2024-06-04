import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private visitorsKey = 'visitors';

  constructor() { }

  getVisitors() {
    const visitors = localStorage.getItem(this.visitorsKey);
    return visitors ? JSON.parse(visitors) : [];
  }

  addVisitor(visitor: any) {
    const visitors = this.getVisitors();
    visitors.push(visitor);
    localStorage.setItem(this.visitorsKey, JSON.stringify(visitors));
  }
}
