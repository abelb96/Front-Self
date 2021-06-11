import { UsersPageModule } from './forum/userspage/userspage.module';
import { MeuPerfilPageModule } from './forum/meuperfilpage/meuperfilpage.module';
import { ResPageModule } from './forum/respage/respage.module';
import { ComResPageModule } from './forum/comrespage/comrespage.module';
import { PerfilPageModule } from './forum/perfilpage/perfilpage.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContatoPagModule } from './contato/contatopag.module';
import { FHomeModule } from './forum/homeforum/fhome/fhome.module';
import { CoreModule } from './forum/core/core.module';
import { HomeForumModule } from './forum/homeforum/homeforum.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FcomponentModule } from './forum/core/forumcomponents/fcomponent.module';
import { AlertModule } from './shared/components/alert/alert.module';
import { CriarPageModule } from './forum/criarpage/criarpage.module';
import { HttpClientModule } from '@angular/common/http';
import { MyTopPageModule } from './forum/mytoppage/mytoppage.module';
import { LikesPageModule } from './forum/likespage/likespage.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HomeForumModule,
    CoreModule,
    FHomeModule,
    ContatoPagModule,
    ComponentsModule,
    FcomponentModule,
    PerfilPageModule,
    AlertModule,
    CriarPageModule,
    ComResPageModule,
    ResPageModule,
    MeuPerfilPageModule,
    MyTopPageModule,
    LikesPageModule,
    NoopAnimationsModule,
    UsersPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
