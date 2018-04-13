import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CocktailsPage } from './cocktails';

@NgModule({
  declarations: [
    CocktailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CocktailsPage),
  ],
})
export class CocktailsPageModule {}
