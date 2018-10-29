import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

  openTiposPage(){
    this.nav.push('TiposPage');
  }
  openSintomasPage(){
    this.nav.push('SintomasPage');
  }
  openDiagnosticoPage(){
    this.nav.push('DiagnosticoPage');
  }
  openTratamentoPage(){
    this.nav.push('TratamentoPage');
  }
  openConvivendoPage(){
    this.nav.push('ConvivendoPage');
  }
  openPrevencaoPage(){
    this.nav.push('PrevencaoPage');
  }
  openPerguntasPage(){
    this.nav.push('PerguntasPage');
  }

}
