import {Page, NavController} from 'ionic-angular';
import {EmployeeDetailsPage} from '../employee-details/employee-details';

import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';

@Page({
  templateUrl: 'build/pages/employee-list/employee-list.html',
  providers: [EmployeeService]
})
export class EmployeeListPage {
  employee: Employee;
  employees: Employee[];
  constructor(public nav: NavController, private employeeService: EmployeeService) {
    this.employeeService.findAll().then(data => this.employees = data);
  }

  search(event, key) {
    this.employeeService.findByName(event.target.value).then(employees => this.employees = employees);
  }

  itemTapped(event, employee: Employee) {
    this.nav.push(EmployeeDetailsPage, {
      employee: employee
    })
  }
}
