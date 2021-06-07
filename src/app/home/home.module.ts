import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ AboutComponent, FormComponent, HomeComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ComponentsModule ]
})
export class HomeModule {}
