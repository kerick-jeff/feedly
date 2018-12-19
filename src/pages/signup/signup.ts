import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name: string = ''
  email: string = ''
  password: string = ''

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) { }

  goBack() {
    this.navCtrl.pop()
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      console.log(data)
      const newUser: firebase.User = data.user
      newUser.updateProfile({
        displayName: this.name,
        photoURL: ''
      }).then(() => {
        console.log('Profile updated')
        this.alertCtrl.create({
          title: 'Account Created',
          message: 'Your account has been created',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                // Navigate to feed page
              }
            }
          ]
        }).present()
      }).catch((e) => {
        console.log(e)
      })
    }).catch((e) => {
      this.toastCtrl.create({
        message: e.message,
        duration: 3000
      }).present()
    })
  }
}
