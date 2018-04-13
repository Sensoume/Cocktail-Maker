import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ToastOptions} from 'ionic-angular';

/**
 * Generated class for the CocktailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cocktails',
  templateUrl: 'cocktails.html',
})
export class CocktailsPage {

  toastOptions:ToastOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.toastOptions = {
      message: "Flasche gewählt",
      duration: 3000
    }
  }

  ButtonPressed() {
    this.toastOptions.message = "Cocktail wird gemixed";
    this.toastCtrl.create(this.toastOptions).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailsPage');
  }

}
