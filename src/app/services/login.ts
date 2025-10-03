import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Login {

  users: Users = [] 

  getRegister(key: string): string | null {
    const items = sessionStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  }

  setRegister(key: string, item: User): void {
    this.users.push(item);
    sessionStorage.setItem(key, JSON.stringify(this.users));
  }

}
