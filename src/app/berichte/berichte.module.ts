import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BerichtePageRoutingModule } from './berichte-routing.module';

import { BerichtePage } from './berichte.page';


  const routes: Routes = [
    {
      path: '',
      component: BerichtePage
    }
  ];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerichtePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BerichtePage]
})
export class BerichtePageModule {}
