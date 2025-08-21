import { Routes } from '@angular/router';
import {AuthGuard} from './orca-pos/core/guards/auth.guard';
import {AuthenticatedGuard} from './orca-pos/core/guards/authenticated.guard';
import {UsersComponent} from './orca-pos/components/users/users.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./orca-pos/authentication/login/login.component'),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./orca-pos/components/dashboard/dashboard.component'),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'usuarios',
        component: UsersComponent,
        children: [
          {
            path: 'add-user',
            loadComponent: () => import('./orca-pos/components/users/add-user/add-user.component'),
          }
        ]
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'login',
  }
];
