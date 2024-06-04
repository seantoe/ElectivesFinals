import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViolationService {
  private violationsKey = 'violations';

  constructor() { }

  getViolations() {
    const violations = localStorage.getItem(this.violationsKey);
    return violations ? JSON.parse(violations) : [];
  }

  addViolation(violation: any) {
    const violations = this.getViolations();
    violations.push(violation);
    localStorage.setItem(this.violationsKey, JSON.stringify(violations));
  }
}
