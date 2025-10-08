import { Routes } from '@angular/router';
import { LoginPage } from './components/login-components/login-page/login-page';
import { HomePage } from './components/landing-page/home-page/home-page';
import { DashboardPage } from './components/dashboard/dashboard-page/dashboard-page';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path: "",
        component: HomePage,
    },
    {
        path: "login",
        component: LoginPage,
        title: "Login"
    },
    {
        path: "dashboard",
        component: DashboardPage,
        canActivate:[authGuard]
    }
];
