// import { SigninPage } from './../pages/signin/signin';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { OneSignal } from '@ionic-native/onesignal';


import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'SigninPage';
  showSplash = true;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(  public platform: Platform,
                public statusBar: StatusBar,
                private auth: AngularFireAuth,
                public splashScreen: SplashScreen,
                private oneSignal: OneSignal) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      this.configurePushNotification();

      this.initializeApp();
      this.pages = [
        { icon: "home", title: 'Tela Inicial', component: HomePage },
        { icon: "book",title: 'Sobre Diabetes', component: 'SobrePage' },
        { icon: "clipboard", title: 'Cadastro Glicose', component: 'ListPerfilPage' },
        { icon: "build",title: 'Calculadoras', component: 'CalculadoraPage' },

      ];
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {

    this.nav.setRoot(page.component);
  }

  signOut(){
    this.auth.auth.signOut();
    this.nav.setRoot('SigninPage')
  }

  configurePushNotification(){
    window["plugins"].OneSignal
    .startInit('20d0e9fd-581c-43b5-a0e6-86cdaa377b57', '285421474651');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(() => {

    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {

    });

    this.oneSignal.endInit();

  }
}
