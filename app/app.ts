import {ViewChild} from '@angular/core';

import {App, Platform, Nav, Menu} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {EmployeeListPage} from './pages/employee-list/employee-list';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;

  rootPage: any = HomePage;
  pages: any[] = [
      {title: 'Home', component: HomePage},
      {title: 'Employees', component: EmployeeListPage}
  ];

  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
