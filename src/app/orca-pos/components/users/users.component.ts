import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../core/services/usuarios.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) {}

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
