import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';

const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private loginService: Login, private router: Router) { }

  login(user: Pick<User, "email" | "password">): boolean {
    const collection = this.loginService.getRegister("user")
    if (collection != null) {
      for (let index of collection) {
        let itemString = JSON.stringify(index);
        let itemJson = JSON.parse(itemString);
        if(user.email == itemJson["email"] && user.password == itemJson["password"]){
          sessionStorage.setItem(USER_KEY, itemJson);
          return true;
        }
        }
      }
    return false;
  }

  logout():void {
    sessionStorage.removeItem(USER_KEY);
    this.router.navigate(["/login"]);
  }

  isLoggedIn():boolean {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? true:false;
  }
}