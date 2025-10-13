import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  receiver = 0;
  switchNum(num: number): void {
    this.receiver = num
  }

  setItem(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value))
  }
  getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

}
