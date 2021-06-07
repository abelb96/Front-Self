import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { SideBarUserComponent } from './sidebaruser/sidebaruser.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { AlertModule } from './../../../shared/components/alert/alert.module';
import { FHeaderComponent } from './header/fheader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
;

@NgModule({
  declarations: [FHeaderComponent, SideBarComponent, SideBarUserComponent, TituloComponent],
  exports: [FHeaderComponent, SideBarComponent, SideBarUserComponent, TituloComponent],
  imports: [CommonModule, AlertModule, RouterModule, ReactiveFormsModule]
})

export class FcomponentModule{}
