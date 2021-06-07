import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { PerfilPageComponent } from './perfilpage.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [PerfilComponent, PerfilPageComponent],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, VMessageModule, FcomponentModule, AlertModule ],
})
export class PerfilPageModule {}
