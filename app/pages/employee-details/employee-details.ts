import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/employee-details/employee-details.html',
})
export class EmployeeDetailsPage {
  employee: any;
  constructor(public nav: NavController, public navParams: NavParams) {
    this.employee = navParams.get('employee');
  }
}
