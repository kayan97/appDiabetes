import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-carboidratos',
  templateUrl: 'carboidratos.html',
})
export class CarboidratosPage {
  total: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarboidratosPage');
  }

  calcular(calculo){
    this.total = ( parseFloat(calculo) )/15;
    console.log(this.total)
    }

}
