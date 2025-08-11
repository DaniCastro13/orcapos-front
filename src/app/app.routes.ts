import { Routes } from '@angular/router';
import {AuthGuard} from './orca-pos/core/guards/auth.guard';
import {AuthenticatedGuard} from './orca-pos/core/guards/authenticated.guard';

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
  },
  {
    path:'**',
    redirectTo: 'login',
  }
];
