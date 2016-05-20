import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/employee-details/employee-details.html',
})
export class EmployeeDetailsPage {
  employee: any;
  constructor(public nav: NavController, public navParams: NavParams) {
    this.employee = navParams.get('employee');
  }
}
