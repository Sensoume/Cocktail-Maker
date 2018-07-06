import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ToastOptions} from 'ionic-angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";

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
  buttons: Array<{title: string, id: number}>;

  constructor(private bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.toastOptions = {
      message: "Flasche gewählt",
      duration: 3000
    }

    this.buttons = [
      { title: 'Flasche ', id: 1},
      { title: 'Flasche ', id: 2},
      { title: 'Flasche ', id: 3},
      { title: 'Flasche ', id: 4},
      { title: 'Flasche ', id: 5}
    ];
  }


  ButtonClick(id : number) {
    this.bluetoothSerial.isConnected().then((success) => {
      this.bluetoothSerial.write("mix:"+id.toString()).then((success) => {
          this.toastOptions.message = "Flasche "+id+" wird gewählt";
          this.toastCtrl.create(this.toastOptions).present();
      },
        (error) => {
          this.toastOptions.message = "Bitte verbinden Sie sich mit dem Raspberry Pi";
          this.toastCtrl.create(this.toastOptions).present();
        })
    },
      (error) =>{
        this.toastOptions.message = "Bitte verbinden Sie sich mit dem Raspberry Pi";
        this.toastCtrl.create(this.toastOptions).present();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MixPage');
  }
}

/*
{ title: 'Flasche ', id: 6},
{ title: 'Flasche ', id: 7},
{ title: 'Flasche ', id: 8},
{ title: 'Flasche ', id: 9},
{ title: 'Flasche ', id: 10}
*/
