import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  //declarations: [ HeaderComponent, FooterComponent ],
  //exports: [ HeaderComponent, FooterComponent ],
  imports: [CommonModule, RouterModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
]
})

export class CoreModule{}
