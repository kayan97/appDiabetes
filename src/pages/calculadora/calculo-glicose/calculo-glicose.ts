import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-calculo-glicose',
  templateUrl: 'calculo-glicose.html',
})
export class CalculoGlicosePage {

  total: number;




  constructor(public navCtrl: NavController,
              public navParams: NavParams ) {}

  somar(v1){
    this.total = ( parseFloat(v1) - 100)/20;
    console.log(this.total)
    }

}
