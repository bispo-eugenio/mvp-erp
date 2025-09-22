import { Routes } from '@angular/router';
import { LoginPage } from './components/login-components/login-page/login-page';
import { HomePage } from './components/landing-page/home-page/home-page';

export const routes: Routes = [
    {
        path: "",
        component: HomePage,
    },
    {
        path: "login",
        component: LoginPage,
        title: "Login"
    }
];
