import { AlertService } from './../../../shared/components/alert/alert.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService, private alert: AlertService) { }

  authenticate(email: string, senha: string) {

   return this.http.post(API_URL + '/usuario/login', { email, senha }, {observe: 'response'})
  .pipe(tap(res => {
    const authToken = res.headers.get('Authorization');
    this.userService.setToken(authToken);
  }))
  }
}

