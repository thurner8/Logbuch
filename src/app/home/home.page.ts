import { Component } from '@angular/core';
import { Router } from '@angular/router';
import PouchDB from 'pouchdb/dist/pouchdb';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  db: any;
  logForm: any;

  constructor(private router: Router, private formBuild: FormBuilder) {
    this.db = new PouchDB('logbook');
    this.logForm = formBuild.group({
      day: ['', Validators.compose([
                    Validators.required,
                     Validators.minLength(2)
                     ])
              ]
    });
  }

  async save() {
    console.log(this.logForm.value);
    const data = {
      message: this.logForm.value.day
    };

    await this.db.post(data);
  }

  /*Seitenwechsel
  */
  gotoReport() {
    this.router.navigate(['berichte']);
  }



}
