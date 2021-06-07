import { ComponentsModule } from './../components/components.module';
import { ContatoComponent } from './contatopag/contato.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContatoPagComponent } from './contatopag.component';

@NgModule({
  declarations: [ ContatoPagComponent, ContatoComponent ],
  imports: [ CommonModule, RouterModule, ComponentsModule ]
})
export class ContatoPagModule {}
