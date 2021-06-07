import { BackButtonModule } from './../../shared/directives/buttonback/buttonback.module';
import { CriarPageComponent } from './criarpage.component';
import { CriarTopicosComponent } from './criartopicos/criartopicos.component';
import { AlertModule } from './../../shared/components/alert/alert.module';
import { FcomponentModule } from './../core/forumcomponents/fcomponent.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [ CriarPageComponent, CriarTopicosComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, VMessageModule, FcomponentModule, AlertModule, BackButtonModule ],
})
export class CriarPageModule {}
