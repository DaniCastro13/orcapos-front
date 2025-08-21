import { Component } from '@angular/core';
import {sidebarLinks} from '../../models/siderbar';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar-component.html'
})
export class SidebarComponent {

  link: sidebarLinks[] = [
    {
      text: 'Inicio',
      icon: 'fa-solid fa-home',
      route: '/dashboard'
    },
    {
      text: 'Usuarios',
      icon: 'fa-solid fa-user',
      route: '/dashboard/usuarios'
    }
  ];


}
