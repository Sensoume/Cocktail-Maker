import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BluetoothSerial} from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
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

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }


  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
        this.unpairedDevices = success;
        this.gettingDevices = false;
        success.forEach(element => {
          // alert(element.name);
        });
      },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
        this.pairedDevices = success;
      },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) {

    let alert = this.alertCtrl.create({
      title: 'Verbinden',
      message: 'Wollen Sie sich mit dem Gerät verbinden?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Abbrechen geklickt');
          }
        },
        {
          text: 'Verbinden',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Verbindung beenden',
      message: 'Wollen Sie die Verbindung beenden?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Abbrechen geklickt');
          }
        },
        {
          text: 'Verbindung beenden',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }
}
