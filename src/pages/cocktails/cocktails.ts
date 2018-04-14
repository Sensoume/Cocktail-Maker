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

  cards: Array<{url: string, title: string, subtitle:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.toastOptions = {
      message: "Flasche gewählt",
      duration: 3000
    }

    this.cards = [
      { url: 'assets/imgs/cocktail-sexonthebeach.jpg', title: 'Sex on the Beach', subtitle: 'So verführerisch wie sein Name: Sex on the Beach. Die fruchtige Versuchung im Longdrink-Format verwandelt Pfirsichlikör, Orangensaft und Cranberry in einen Wodka-Cocktail mit Highball-Anleihen. Übrigens – ohne Wodka wird’s zum Safer Sex on the Beach!' },
      { url: 'assets/imgs/pina-colada-cocktail.jpg', title: 'Pina Colada', subtitle: 'Karibik pur! Mit einer Pina Colada kommt sofort Urlaubsstimmung auf. Der tropisch-fruchtige Sommer-Cocktail verwandelt Ananas, braunen und weißen Rum, Kokos und Sahne in eine wunderbar cremige Mischung, die auch in unseren Breiten Tiki-Kultur aufleben lässt.\n'}
    ];
  }

  ButtonPressed() {
    this.toastOptions.message = "Cocktail wird gemixed";
    this.toastCtrl.create(this.toastOptions).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailsPage');
  }

}
