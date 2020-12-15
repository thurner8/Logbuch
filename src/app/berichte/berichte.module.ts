import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerichtePageRoutingModule } from './berichte-routing.module';

import { BerichtePage } from './berichte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerichtePageRoutingModule
  ],
  declarations: [BerichtePage]
})
export class BerichtePageModule {}
