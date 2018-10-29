import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { PerfilProvider } from './../../../providers/perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-list-perfil',
  templateUrl: 'list-perfil.html',
})
export class ListPerfilPage {

  perfil: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private perfilProvider: PerfilProvider) {

      this.perfil = this.perfilProvider.getAll();

  }


  newPerfils(){
    this.navCtrl.push('EditPerfilPage');
  }

  editPerfils(perfil: any){
    this.navCtrl.push('EditPerfilPage', { perfilkey: perfil.key });
  }

  removePerfils(key:string){
    this.perfilProvider.remove(key);
    this.toast.create({message:'Perfil removida com sucesso!', duration: 3000}).present();
  }

}
