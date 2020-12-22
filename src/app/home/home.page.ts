import { Component } from '@angular/core';
import { Router } from '@angular/router';
import PouchDB from 'pouchdb/dist/pouchdb';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  db: any;

  constructor(private router: Router) {
    this.db = new PouchDB('logbook');
  }

  /*Seitenwechsel
  */
  gotoReport() {
    this.router.navigate(['berichte']);
  }



}
