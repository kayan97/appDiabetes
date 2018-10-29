import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  openImcPage(){
    this.nav.push('ImcPage');
  }
  openCalculoGlicosePage(){
    this.nav.push('CalculoGlicosePage');
  }
  openCalculoCarboidratos(){
    this.nav.push('CarboidratosPage');
  }

}
