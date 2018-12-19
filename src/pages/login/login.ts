import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/auth'

import { FeedPage } from '../feed/feed';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = ''
  password: string = ''

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) { }

  goToSignup() {
    this.navCtrl.push('SignupPage')
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((data) => {
      console.log(data)
      this.toastCtrl.create({
        message: 'Welcome ' + data.user.displayName,
        duration: 3000
      }).present().then(() => {
        this.navCtrl.setRoot(FeedPage)
      })
    }).catch((e) => {
      this.toastCtrl.create({
        message: e.message,
        duration: 3000
      }).present()
    })
  }
}
