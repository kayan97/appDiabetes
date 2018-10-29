import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculoGlicosePage } from './calculo-glicose';

@NgModule({
  declarations: [
    CalculoGlicosePage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoGlicosePage),
  ],
})
export class CalculoGlicosePageModule {}
