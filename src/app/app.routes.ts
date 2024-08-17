import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'productos', component:ArticulosComponent,canActivate: [authGuard]}
];
