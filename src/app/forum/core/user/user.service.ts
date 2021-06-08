import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'

import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API = environment.ApiUrl;
@Injectable({providedIn: 'root'})
export class UserService{

  private userSubject = new BehaviorSubject<User>(null);

  private tempoToken: number;
  private userId: number;
  private userName: string;
  private userEmail: string;
  private userEmailVerificado: number;
  private userAdmin: number;
  public acabouTempo:boolean;

  constructor(private tokenService: TokenService, private route: Router, private http: HttpClient){

    this.tokenService.hasToken() && this.decodeAndNotify();

  }

  EnviaForm(form) {
    return this.http.post(API + '/landing', form)
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.tempoToken = user.exp;
    this.userId = user.id;
    this.userName = user.nome;
    this.userEmail = user.email;
    this.userEmailVerificado = user.emailVerificado;
    this.userAdmin = user.admin;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }


  TokenTime() {
    return this.tempoToken
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  getUserId() {
    return this.userId;
  }

  getUserName() {
    return this.userName;
  }

  getUserEmail() {
    return this.userEmail;
  }

  getUserEmailVerification() {
    return this.userEmailVerificado;
  }

  getUserAdmin() {
    return this.userAdmin;
  }

  edita(userId, usuario) {
    return this.http.put(API + `/usuario/edita-perfil/${userId}`, usuario)
  }

  getUsers() {
    return this.http.get(API + `/lista/users`)
  }
}
