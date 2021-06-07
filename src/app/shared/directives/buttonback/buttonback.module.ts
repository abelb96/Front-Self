import { NgModule } from '@angular/core';
import { BackButtonDirective } from './buttonback.directive';

@NgModule({
  declarations: [BackButtonDirective],
  exports: [BackButtonDirective]
})
export class BackButtonModule {}
