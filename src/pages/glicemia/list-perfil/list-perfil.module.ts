import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPerfilPage } from './list-perfil';

@NgModule({
  declarations: [
    ListPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPerfilPage),
  ],
})
export class ListPerfilPageModule {}
