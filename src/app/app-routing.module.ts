import { EsqueciComponent } from './forum/homeforum/esqueci/esqueci.component';
import { MyTopPageComponent } from './forum/mytoppage/mytoppage.component';
import { MeuPerfilPageComponent } from './forum/meuperfilpage/meuperfilpage.component';
import { ResPageComponent } from './forum/respage/respage.component';
import { ComResPageComponent } from './forum/comrespage/comrespage.component';
import { CriarPageComponent } from './forum/criarpage/criarpage.component';
import { PerfilPageComponent } from './forum/perfilpage/perfilpage.component';
import { CadastroComponent } from './forum/homeforum/cadastro/cadastro.component';
import { LoginComponent } from './forum/homeforum/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './forum/core/auth/login.guard';
import { AuthGuard } from './forum/core/auth/auth.guard';
import { ContatoPagComponent } from './contato/contatopag.component';
import { FhomeComponent } from './forum/homeforum/fhome/fhome.component';
import { LikesPageComponent } from './forum/likespage/likespage.component';
import { MudaSenhaComponent } from './forum/homeforum/muda-senha/muda-senha.component';
import { UsersPageComponent } from './forum/userspage/userspage.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'contato', component: ContatoPagComponent, data: {title: 'Contato'}},
  {path: 'modifica-senha/:token', canActivate: [LoginGuard], component: MudaSenhaComponent, data: {title: 'Mudar Senha'}},
  {path: 'forum-login', canActivate: [LoginGuard], component: LoginComponent, data: {title: 'Logar'}},
  {path: 'forum-cadastro', canActivate: [LoginGuard], component: CadastroComponent, data: {title: 'Cadastrar'}},
  {path: 'forum-esqueci', canActivate: [LoginGuard], component: EsqueciComponent, data: {title: 'Esqueci'}},
  {path: 'forum/cria-topico',  canActivate: [AuthGuard], component: CriarPageComponent, data: {title: 'Criar Tópico'}},
  {path: 'forum/meus-topicos', canActivate: [AuthGuard], component: MyTopPageComponent, data: {title: 'Meus Tópicos'}},
  {path: 'forum/usuarios', canActivate: [AuthGuard], component: UsersPageComponent, data: {title: 'Usuarios'}},
  {path: 'forum/:userName', canActivate: [AuthGuard], component: FhomeComponent, data: {title: 'Topicos'}},
  {path: 'forum/perfil/:id', canActivate: [AuthGuard], component: PerfilPageComponent, data: {title: 'Perfil'}},
  {path: 'forum/meu-perfil/:id', canActivate: [AuthGuard], component: MeuPerfilPageComponent, data: {title: 'Meu Perfil'}},
  {path: 'forum/topico/:id', canActivate: [AuthGuard], component: ComResPageComponent, data: {title: 'Topico'}},
  {path: 'forum/responder-topico/:id', canActivate: [AuthGuard], component: ResPageComponent, data: {title: 'Responder Tópico'}},
  {path: 'forum/curtidas-topico/:id', canActivate: [AuthGuard], component: LikesPageComponent, data: {title: 'Curtidas'}},
  {path: '**', pathMatch: "full", redirectTo: 'forum/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
