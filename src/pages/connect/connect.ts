import { Component } from '@angular/core';
import { IonicPage, ToastController, ToastOptions } from 'ionic-angular';
import { BluetoothSerial} from '@ionic-native/bluetooth-serial';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  toastOptions:ToastOptions;
  btstatus: string;
  settings_pause: string;
  flask1: string;
  flask2: string;
  flask3: string;
  flask4: string;
  flask5: string;

  constructor(private bluetoothSerial: BluetoothSerial, private toastCtrl: ToastController, public storage: Storage) {
    this.toastOptions = {
      message: "Flasche gewählt",
      duration: 3000
    }
    this.bluetoothSerial.isConnected().then((success) => {
      this.btstatus = "Verbunden";
    },
    (error) => {
      this.btstatus = "Nicht verbunden";
    });

    this.init();
    this.setStorage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }

  connect () {
    this.bluetoothSerial.enable();
    this.bluetoothSerial.connect("B8:27:EB:55:39:9E").subscribe(this.success, this.fail);
  }

  disconnect() {
    this.bluetoothSerial.disconnect();
    this.btstatus = "Nicht verbunden";
  }

  success = (data) => {
    this.toastOptions.message = "Erfolgreich mit dem Raspberry Pi verbunden";
    this.toastCtrl.create(this.toastOptions).present();
    this.btstatus = "Verbunden";
  }
  fail = (error) => {
    this.toastOptions.message = "Probleme beim Verbinden mit dem Raspberry Pi";
    this.toastCtrl.create(this.toastOptions).present();
    this.btstatus = "Nicht verbunden";
  };

  init() {
    this.flask1 = 'Orangensaft';
    this.flask2 = 'Cola';
    this.flask3 = 'Wodka';
    this.flask4 = 'Rum';
    this.flask5 = 'Tequila';
  }

  setStorage() {
    this.storage.set("Flasche 1", this.flask1);
    this.storage.set("Flasche 2", this.flask2);
    this.storage.set("Flasche 3", this.flask3);
    this.storage.set("Flasche 4", this.flask4);
    this.storage.set("Flasche 5", this.flask5);
  }

  ButtonClick() {
    this.setStorage();

    //Send Settings Interval via BT
    this.bluetoothSerial.isConnected().then((success) => {
        this.bluetoothSerial.write("set:"+this.settings_pause).then((success) => {
            this.toastOptions.message = "Settings: "+this.settings_pause+" ms gespeichert";
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
}
