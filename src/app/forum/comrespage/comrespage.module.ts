import { ComResPageComponent } from './comrespage.component';
import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { TopResComponent } from './topres/topres.component';

@NgModule({
  declarations: [ ComResPageComponent, TopResComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, VMessageModule, FcomponentModule, AlertModule ],
})
export class ComResPageModule {}
