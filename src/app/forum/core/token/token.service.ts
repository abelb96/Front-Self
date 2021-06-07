import { Injectable } from '@angular/core';

const KEY = 'Authorization';

@Injectable({providedIn: 'root'})//unica instancia para aplicação inteira
export class TokenService {
  hasToken() {
    this
    return !!this.getToken(); //lógica se esse cara é null, o primeiro ! vai trocar pra true, o segundo ! vai trocar pra false. Então se for uma string retorna true

  }

  setToken(token){
    window.localStorage.setItem(KEY, token);
  }

  getToken(){
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY)
  }
}
