import {CatRol} from './CatRol';

export interface User {
  idUsuario: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  edad: number;
  direccion: string;
  username: string;
  password: string;
  correoElectronico: string;
  rol: CatRol;
  activo: boolean;
}
