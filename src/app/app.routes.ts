import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'home page',
        component: HomeComponent,
        canActivate:[authGuard]
    },
    {
        path: 'login',
        title: 'login page',
        component:LoginComponent
    }
];
