import { LikesPageComponent } from './likespage.component';
import { BackButtonModule } from './../../shared/directives/buttonback/buttonback.module';
import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { LikesComponent } from './likes/likes.component';


@NgModule({
  declarations: [ LikesPageComponent, LikesComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, VMessageModule, FcomponentModule, AlertModule, BackButtonModule ],
})
export class LikesPageModule {}
