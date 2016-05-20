import { EMPLOYEES } from './mock-employees';

export class EmployeeService {
  findAll() {
    return Promise.resolve(EMPLOYEES);
  }

  findById(id: number) {
    return Promise.resolve(EMPLOYEES[id-1]);
  }

  findByName(name: string) {
    let filtered = EMPLOYEES.filter(employee => (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1);
    return Promise.resolve(filtered);
  }
}
