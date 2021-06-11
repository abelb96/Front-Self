import { AlertService } from './shared/components/alert/alert.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { UserService } from './forum/core/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private atidavordeRota: ActivatedRoute,
     private titleService: Title,
      private router: Router, private userService: UserService, private alert: AlertService) {}


  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.atidavordeRota))
    .pipe(map((route) => {
      while(route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(switchMap(route => route.data))
    .subscribe(event => this.titleService.setTitle(event.title));

    const tempoT = this.userService.TokenTime()
    const tempoToken = tempoT * 1000;
    const tempoagora = new Date(Date.now());
    const vencimentoToken = new Date(tempoToken);
    if(tempoagora >= vencimentoToken) {
      this.userService.logout()
    }
  }

 }
