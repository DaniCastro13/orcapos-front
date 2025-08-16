import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html'
})
export default class DashboardComponent {

}
