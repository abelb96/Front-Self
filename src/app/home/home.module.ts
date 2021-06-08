import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask';

import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
  declarations: [ AboutComponent, FormComponent, HomeComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ComponentsModule, NgxMaskModule, VMessageModule, HttpClientModule, AlertModule ]
})
export class HomeModule {}
