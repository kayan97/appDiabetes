import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvivendoPage } from './convivendo';

@NgModule({
  declarations: [
    ConvivendoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvivendoPage),
  ],
})
export class ConvivendoPageModule {}
