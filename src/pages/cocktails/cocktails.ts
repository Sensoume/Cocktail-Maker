import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ToastController, ToastOptions} from 'ionic-angular';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import { Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-cocktails',
  templateUrl: 'cocktails.html',
})
export class CocktailsPage {
  @ViewChild('slider') slider: Slides;

  toastOptions:ToastOptions;
  cards: Array<{count: string[], ingredient: string[], url: string, title: string, subtitle:string}>;

  constructor(private bluetoothSerial: BluetoothSerial, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.cards = [
      { count: ['4', '2', '4', '4'], ingredient: ['Wodka','Pfirsichlikör','Orangensaft', 'Cranberrysaft'], url: 'assets/imgs/sexonthebeach.png', title: 'Sex on the Beach', subtitle: 'So verführerisch wie sein Name: Sex on the Beach. Die fruchtige Versuchung im Longdrink-Format verwandelt Pfirsichlikör, Orangensaft und Cranberry in einen Wodka-Cocktail mit Highball-Anleihen. Übrigens – ohne Wodka wird’s zum Safer Sex on the Beach!' },
      { count: ['2', '2', '2', '2', '8'], ingredient: ['Rum','Rum','Kokos-Sirup', 'Sahne', 'Ananassaft'], url: 'assets/imgs/pinacolada.png', title: 'Pina Colada', subtitle: 'Karibik pur! Mit einer Pina Colada kommt sofort Urlaubsstimmung auf. Der tropisch-fruchtige Sommer-Cocktail verwandelt Ananas, braunen und weißen Rum, Kokos und Sahne in eine wunderbar cremige Mischung, die auch in unseren Breiten Tiki-Kultur aufleben lässt.\n'},
      { count: ['5', '2', '1'], ingredient: ['Cachaca','Rohrzucker','Limettensaft' ], url: 'assets/imgs/caipirinha.png', title: 'Caipirinha', subtitle: 'Der Caipirinha ist einfach der Hit unter den Cocktails! Keine Party geht ohne der erfrischenden, fruchtig-säuerlichen Caipirinha. Tips: den Trinkhalm vor dem Servieren kräftig umrühren, damit der Zucker sich verteilt. '},
      { count: ['2', '2', '4', '4', '2', '2'], ingredient: ['Wodka','Rum','Orangensaft', 'Cranberrysaft', 'Zuckersirup', 'Zitronensaft', '3cl Cola'], url: 'assets/imgs/longislandicedtea.png', title: 'Long Island Iced Tea', subtitle: 'Sieht aus wie Eistee, schmeckt hochprozentig fantastisch. Im starken Klassiker Long Island Ice Tea ist alles drin, was Laune macht: Wodka, Rum, Gin und Triple Sec, getoppt mit Cola und etwas Zitrone. Eine amerikanische Erfindung ganz nach unserem Geschmack.'},
      { count: ['4', '2', '8'], ingredient: ['Tequila','Zitronensaft','Orangensaft'], url: 'assets/imgs/tequilasunrise.png', title: 'Tequila Sunrise', subtitle: 'Da der Name "Tequila Sunrise" schon vergeben war und nicht einen wirklichen Tequila Sunrise darstellt, habe ich den Namen leicht verändert.'},
      { count: ['5', '2', '2'], ingredient: ['Tequila','Limettensaft','Orangensaft'], url: 'assets/imgs/margarita.png', title: 'Margarita', subtitle: 'Der mit dem Salzrand. Aus Tequila, Limette und Triple Sec zaubern Barkeeper einen anregenden Cocktail und Shortdrink, der jeden noch so verregneten Sommer rettet. Gern auch als Frozen Margarita mit Crushed Eis im Mixer. Viva la Mexico!'}
    ];
  }

  ButtonPressed() {
    let slide = this.slider.getActiveIndex();
    let bottles : any;
    let counts : any;
    bottles  = this.cards[slide].ingredient;
    counts = this.cards[slide].count;
    let bottle: String;
    bottle = "";
    console.log('Bottle Laenge: '+bottles.length);
    for(let i = 0; i < bottles.length; i++)
    {
      this.storage.get('Flasche '+(i+1)).then(value => {
        if(value == bottles[i])
          bottle += (i+1)+':'+counts[0]+':';
      });
    }
    console.log("ct:"+this.cards[slide].title+":"+bottle);
    //this.toastOptions.message = "ct:"+this.cards[slide].title+":"+bottle;
    //BT Send  Type - Title - Bottles - Time
    // this.bluetoothSerial.write("ct:"+this.cards[slide].title+":"+bottle).then((success) => {
    //     this.toastOptions.message = this.cards[slide].title+" wird gemixed";
    //   },
    //   (error) => {
    //     this.toastOptions.message = "Bitte verbinden Sie sich mit dem Raspberry Pi";
    //   });
    //this.toastCtrl.create(this.toastOptions).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailsPage');
    this.slider.autoHeight = true;
  }

  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }

}

/*
html
  <ion-card text-center *ngFor="let c of cards">
    <img src="{{c.url}}"/>
    <ion-card-content>
      <ion-card-title class="card-title">
        {{c.title}}
      </ion-card-title>
      <p class="card-subtitle">
        {{c.subtitle}}
      </p>
    </ion-card-content>
    <button ion-button round class="card-button" (click)='ButtonPressed();'>Bestellen</button>
  </ion-card>
 */
