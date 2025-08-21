import {Component, inject, OnInit} from '@angular/core';
import {UsuariosService} from '../../core/services/usuarios.service';
import {User} from '../../models/User';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  isAddUser = false;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAddUser = this.router.url.includes('/add-user');
      }
    })
  }

  users: User[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usuariosService.getUsers().subscribe(resp => {
      console.log("Response from getUsers:", resp);
      this.users = Array.isArray(resp) ? resp : [];// Assuming the response has totalPages property
    });
  }


}
