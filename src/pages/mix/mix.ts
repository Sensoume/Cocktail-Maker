import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ToastOptions} from 'ionic-angular';

/**
 * Generated class for the MixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mix',
  templateUrl: 'mix.html',
})
export class MixPage {

  toastOptions:ToastOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.toastOptions = {
      message: "Flasche gewählt",
      duration: 3000
    }
  }


  ButtonClick1() {
    this.toastOptions.message = "Flasche 1 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick2() {
    this.toastOptions.message = "Flasche 2 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick3() {
    this.toastOptions.message = "Flasche 3 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick4() {
    this.toastOptions.message = "Flasche 4 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick5() {
    this.toastOptions.message = "Flasche 5 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick6() {
    this.toastOptions.message = "Flasche 6 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick7() {
    this.toastOptions.message = "Flasche 7 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick8() {
    this.toastOptions.message = "Flasche 8 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick9() {
    this.toastOptions.message = "Flasche 9 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }
  ButtonClick10() {
    this.toastOptions.message = "Flasche 10 wird gewählt";
    this.toastCtrl.create(this.toastOptions).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MixPage');
  }

}
