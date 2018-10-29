import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';


//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//PAGS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//PROVIDERS
import { AccountProvider } from '../providers/account/account';
import { PerfilProvider } from '../providers/perfil/perfil';

import { NgCalendarModule } from 'ionic2-calendar';
import { HomeProvider } from '../providers/home/home';
import { config } from '../config';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    PerfilProvider,
    HomeProvider,
    OneSignal,

  ]
})
export class AppModule {}
