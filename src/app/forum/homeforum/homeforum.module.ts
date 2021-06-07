import { MudaSenhaComponent } from './muda-senha/muda-senha.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { ComponentsModule } from './../../components/components.module';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from './cadastro/cadastro.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ LoginComponent, CadastroComponent, EsqueciComponent, MudaSenhaComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, VMessageModule, ComponentsModule, NgxMaskModule ],
  providers: [CadastroService]
})
export class HomeForumModule {}
