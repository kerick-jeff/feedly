import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase/app';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';

firebase.initializeApp({
  apiKey: "AIzaSyAF32hT1Gau-u9rst_hd4QqeY2HWC71W3M",
  authDomain: "feedly-3f063.firebaseapp.com",
  databaseURL: "https://feedly-3f063.firebaseio.com",
  projectId: "feedly-3f063",
  storageBucket: "feedly-3f063.appspot.com",
  messagingSenderId: "351107395276"
});

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
