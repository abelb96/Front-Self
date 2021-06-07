import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if(this.userService.isLogged()) {
      const nome = this.userService.getUserName()
      this.router.navigate(['forum', nome])
      return false;
    }
    return true;
  }



}
