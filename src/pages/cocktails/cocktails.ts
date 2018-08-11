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
    /*this.cards = [
      { count: ['4', '2', '4', '4'], ingredient: ['Wodka','Pfirsichlikör','Orangensaft', 'Cranberrysaft'], url: 'assets/imgs/sexonthebeach.png', title: 'Sex on the Beach', subtitle: 'So verführerisch wie sein Name: Sex on the Beach. Die fruchtige Versuchung im Longdrink-Format verwandelt Pfirsichlikör, Orangensaft und Cranberry in einen Wodka-Cocktail mit Highball-Anleihen. Übrigens – ohne Wodka wird’s zum Safer Sex on the Beach!' },
      { count: ['2', '2', '2', '2', '8'], ingredient: ['Rum','Rum','Kokos-Sirup', 'Sahne', 'Ananassaft'], url: 'assets/imgs/pinacolada.png', title: 'Pina Colada', subtitle: 'Karibik pur! Mit einer Pina Colada kommt sofort Urlaubsstimmung auf. Der tropisch-fruchtige Sommer-Cocktail verwandelt Ananas, braunen und weißen Rum, Kokos und Sahne in eine wunderbar cremige Mischung, die auch in unseren Breiten Tiki-Kultur aufleben lässt.\n'},
      { count: ['5', '2', '1'], ingredient: ['Cachaca','Rohrzucker','Limettensaft' ], url: 'assets/imgs/caipirinha.png', title: 'Caipirinha', subtitle: 'Der Caipirinha ist einfach der Hit unter den Cocktails! Keine Party geht ohne der erfrischenden, fruchtig-säuerlichen Caipirinha. Tips: den Trinkhalm vor dem Servieren kräftig umrühren, damit der Zucker sich verteilt. '},
      { count: ['2', '2', '4', '4', '2', '2'], ingredient: ['Wodka','Rum','Orangensaft', 'Cranberrysaft', 'Zuckersirup', 'Zitronensaft', '3cl Cola'], url: 'assets/imgs/longislandicedtea.png', title: 'Long Island Iced Tea', subtitle: 'Sieht aus wie Eistee, schmeckt hochprozentig fantastisch. Im starken Klassiker Long Island Ice Tea ist alles drin, was Laune macht: Wodka, Rum, Gin und Triple Sec, getoppt mit Cola und etwas Zitrone. Eine amerikanische Erfindung ganz nach unserem Geschmack.'},
      { count: ['4', '2', '8'], ingredient: ['Tequila','Zitronensaft','Orangensaft'], url: 'assets/imgs/tequilasunrise.png', title: 'Tequila Sunrise', subtitle: 'Da der Name "Tequila Sunrise" schon vergeben war und nicht einen wirklichen Tequila Sunrise darstellt, habe ich den Namen leicht verändert.'},
      { count: ['5', '2', '2'], ingredient: ['Tequila','Limettensaft','Orangensaft'], url: 'assets/imgs/margarita.png', title: 'Margarita', subtitle: 'Der mit dem Salzrand. Aus Tequila, Limette und Triple Sec zaubern Barkeeper einen anregenden Cocktail und Shortdrink, der jeden noch so verregneten Sommer rettet. Gern auch als Frozen Margarita mit Crushed Eis im Mixer. Viva la Mexico!'}
    ];*/
    this.cards = [
      { count: ['4', '2', '5', '5'], ingredient: ['Wodka','Brandy','Orangensaft', 'Cranberrysaft'], url: 'assets/imgs/sexonthebeach.png', title: 'Sex on the Beach (Alkoholisch)', subtitle: 'So verführerisch wie sein Name: Sex on the Beach. Die fruchtige Versuchung im Longdrink-Format verwandelt Pfirsichlikör, Orangensaft und Cranberry in einen Wodka-Cocktail mit Highball-Anleihen. Übrigens – ohne Wodka wird’s zum Safer Sex on the Beach!' },
      { count: ['4', '4', '8'], ingredient: ['Wodka', 'Brandy', 'Orangensaft'], url: 'assets/imgs/goldengirls.jpg', title: 'Golden-Girls (Alkoholisch)', subtitle:'Golden-Girls Cocktail mit Alkohol'},
      { count: ['4', '12'], ingredient: ['Wodka', 'Orangensaft'], url: 'assets/imgs/screwdriver.jpg', title: 'Screwdriver (Alkoholisch)', subtitle:'Screwdriver Cocktail mit Alkohol'},
      { count: ['4', '12'], ingredient: ['Wodka', 'Maracujasaft'], url: 'assets/imgs/WodkaMaracujasaft.jpg', title: 'Wodka-Maracuja (Alkoholisch)', subtitle:'Wodka-Maracuja Cocktail mit Alkohol'},
      { count: ['4', '12'], ingredient: ['Wodka', 'Cranberrysaft'], url: 'assets/imgs/wodkacranberry.jpg', title: 'Wodka-Cranberrysaft (Alkoholisch)', subtitle:'Wodka-Cranberrysaft Cocktail mit Alkohol'},
      { count: ['10', '5', '1'], ingredient: ['Orangensaft', 'Maracujasaft', 'Cranberrysaft'], url: 'assets/imgs/sunset.jpg', title: 'Sunset Cocktail (Alkoholfrei)', subtitle:'Sunset Cocktail ohne Alkohol'},
      { count: ['10'], ingredient: ['Maracujasaft'], url: 'assets/imgs/maracujasaft.jpeg', title: 'Maracujasaft (Alkoholfrei)', subtitle:'Einfach nur Maracujasaft ohne Alkohol'},
      { count: ['10'], ingredient: ['Orangensaft'], url: 'assets/imgs/orangensaft.png', title: 'Orangensaft (Alkoholfrei)', subtitle:'Einfach nur Orangensaft ohne Alkohol'},
      { count: ['10'], ingredient: ['Cranberrysaft'], url: 'assets/imgs/cranberry-saft.jpg', title: 'Cranberrysaft (Alkoholfrei)', subtitle:'Einfach nur Cranberrysaft ohne Alkohol'}
    ];

  }

  ButtonPressed() {
    let slide = this.slider.getActiveIndex();
    /*let bottles : string[];
    let counts : any;
    bottles  = this.cards[slide].ingredient;
    counts = this.cards[slide].count;
    let bottle: String;
    bottle = "";
    this.storage.ready().then(v => {
      this.storage.get("").then(value => {

      });
    });
    for(let i = 0; i < 5; i++)
    {
      if(bottles.indexOf(this.flasks[i]) > -1) {
        bottle += (i.toString()+1)+':'+counts[0]+":";
        //console.log("ct:"+this.cards[slide].title+":"+bottle);
      }
    }*/
    /*
     *  Getränke:
     *  Flasche 1:  Wodka
     *  Flasche 2:  Brandy
     *  Flasche 3:  Orangensaft
     *  Flasche 4:  Maracujasaft
     *  Flasche 5:  Cranberrysaft
     */
    let msg = "";
    switch(slide){
      case 0:
        msg = "ct:Sex on the Beach:1:4:2:2:3:5:5:5";
        this.sendMsg(msg);
        break;
      case 1:
        msg = "ct:GoldenGirls:1:4:2:4:3:8";
        this.sendMsg(msg);
        break;
      case 2:
        msg = "ct:Screwdriver:1:4:3:12";
        this.sendMsg(msg);
        break;
      case 3:
        msg = "ct:WodkaMaracuja:1:4:4:12";
        this.sendMsg(msg);
        break;
      case 4:
         msg = "ct:WodkaCranberry:1:4:5:12";
        this.sendMsg(msg);
        break;
      case 5:
        msg = "ct:Sunset:3:10:4:5:5:1";
        this.sendMsg(msg);
        break;
      case 6:
        msg = "ct:Maracujasaft:4:10";
        this.sendMsg(msg);
        break;
      case 7:
        msg = "ct:Orangensaft:3:10";
        this.sendMsg(msg);
        break;
      case 8:
        msg = "ct:Cranberrysaft:5:10";
        this.sendMsg(msg);
        break;
      default:
    }
  }

  sendMsg(msg: String) {
    //BT Send  Type - Title - Bottles - Time
    this.bluetoothSerial.write(msg).then((success) => {
        console.log(msg);
        //this.toastOptions.message = this.cards[slide].title+" wird gemixed";
      },
      (error) => {
        //this.toastOptions.message = "Bitte verbinden Sie sich mit dem Raspberry Pi";
        console.log("error sending cocktail to RPI");
      });
    this.toastCtrl.create(this.toastOptions).present();
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


//<ion-slides #slider pager="true" loop="false" autoplay="2000" speed="2000">
