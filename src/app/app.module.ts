import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EinstellungenPage } from "../pages/einstellungen/einstellungen";
import { CocktailsPage } from "../pages/cocktails/cocktails";
import { ConnectPage } from "../pages/connect/connect";
import { MixPage } from "../pages/mix/mix";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { IonicStorageModule } from "@ionic/storage";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EinstellungenPage,
    CocktailsPage,
    ConnectPage,
    MixPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__cocktaildatabase',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EinstellungenPage,
    CocktailsPage,
    ConnectPage,
    MixPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
