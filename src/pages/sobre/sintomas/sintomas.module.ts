import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SintomasPage } from './sintomas';

@NgModule({
  declarations: [
    SintomasPage,
  ],
  imports: [
    IonicPageModule.forChild(SintomasPage),
  ],
})
export class SintomasPageModule {}
