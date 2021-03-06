import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EinstellungenPage } from "../pages/einstellungen/einstellungen";
import { CocktailsPage } from "../pages/cocktails/cocktails";
import { ConnectPage } from "../pages/connect/connect";
import { MixPage } from "../pages/mix/mix";
import { timer } from 'rxjs/observable/timer';
import { Storage } from '@ionic/storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Startseite', icon: 'home', component: HomePage },
      { title: 'Verbinden', icon: 'wifi', component: ConnectPage },
      { title: 'Mixen', icon: 'flask', component: MixPage },
      { title: 'Cocktails', icon: 'wine', component: CocktailsPage },
      { title: 'Einstellungen', icon: 'cog', component: EinstellungenPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
