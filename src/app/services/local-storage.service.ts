import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, item) {
    if (item && item.length) {
      localStorage.setItem(name, JSON.stringify(item));
    }
  }

  getItem(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }
}
