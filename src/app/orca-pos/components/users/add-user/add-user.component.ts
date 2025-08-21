import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {User} from '../../../models/User';
import {UsuariosService} from '../../../core/services/usuarios.service';
import Swal from 'sweetalert2';
import {CatRol} from '../../../models/CatRol';
import {RolService} from '../../../core/services/rol.service';

@Component({
  selector: 'app-add-user',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './add-user.component.html'
})
export default class AddUserComponent implements OnInit {

  rol: CatRol[] = [];

  user: User = {
    idUsuario: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: 0,
    direccion: 'user',
    username: '',
    password: '',
    correoElectronico: '',
    rol: {
      idRol: 0,
      claveRol: '',
      nombreRol: '',
      descripcionRol: '',
      activo: true
    },
    activo: false
  }

  constructor(private userService: UsuariosService, private rolService: RolService) {  }

  ngOnInit(): void {
    this.getRoles();
  }

  onSubmit() {
    console.log("Datos del usuario a guardar: " + JSON.stringify(this.user));
    if(this.validCampos()) {
      this.userService.saveUser(this.user).subscribe({
        next: (response: User) => {
          console.log("Respuesta del bakc para guardar usuario " + response);
          Swal.fire({
            icon: 'success',
            title: 'Usuario guardado',
            text: 'El usuario ha sido guardado exitosamente.'
          });
        },
        error: (error) => {
          console.error('Error saving user', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al guardar el usuario. Por favor, intenta de nuevo.'
          });
        }
      })
    }
  }

  getRoles() {
    this.rolService.getRoles().subscribe(
      (response: CatRol[]) => {
        console.log("Respuesta del bakc para extraer roles " + response);
        this.rol = response;
      },
      error => {
        console.error('Error fetching roles', error);
      }
    );
  }

  private validCampos(): boolean {
    if(this.user.nombre === '' || this.user.apellidoPaterno === '' || this.user.apellidoMaterno === '' ||
       this.user.edad <= 0 || this.user.direccion === '' || this.user.username === '' || this.user.password === '' ||
       this.user.correoElectronico === '' || this.user.rol.idRol <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos obligatorios.'
      });
      return false;
    } else {
      return true;
    }
  }
}
