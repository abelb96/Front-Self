import { UsersComponent } from './users/users.component';
import { UsersPageComponent } from './userspage.component';

import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ UsersPageComponent, UsersComponent ],
  imports: [ CommonModule, RouterModule, VMessageModule, FcomponentModule, AlertModule, ReactiveFormsModule ]
})
export class UsersPageModule {}
