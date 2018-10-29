import { HomeProvider } from './../../providers/home/home';
import { Component } from '@angular/core';
import { NavController, ModalController, AlertController,NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import *as moment from 'moment'
// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/zh';
// registerLocaleData(localePt);
// import { AccountProvider } from './../../providers/account/account';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string;
  homes:Observable<any[]>;


  constructor(
    public navCtrl: NavController,

    public navParams: NavParams,
    private auth: AngularFireAuth,
    private homeProvider: HomeProvider) {
    this.homes = this.homeProvider.getAll();{}

  }
  ionViewDidLoad() {
    const userState = this.auth.authState.subscribe( user => {
      if (user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }
    })
  }
      newItemHome(){
        this.navCtrl.push('EditHomePage')
      }
}

