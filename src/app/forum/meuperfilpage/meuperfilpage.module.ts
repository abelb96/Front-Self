import { BackButtonModule } from './../../shared/directives/buttonback/buttonback.module';
import { MeuPerfilPageComponent } from './meuperfilpage.component';
import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { MeuPerfilComponent } from './meuperfil/meuperfil.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [MeuPerfilPageComponent, MeuPerfilComponent],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, VMessageModule, FcomponentModule, AlertModule, BackButtonModule, NgxMaskModule ]
})
export class MeuPerfilPageModule {}
