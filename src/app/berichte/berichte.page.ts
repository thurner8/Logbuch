import { Component, OnInit } from '@angular/core';
import PouchDB from 'pouchdb/dist/pouchdb';

@Component({
  selector: 'app-berichte',
  templateUrl: './berichte.page.html',
  styleUrls: ['./berichte.page.scss'],
})
export class BerichtePage implements OnInit {

  db: any;
  buttonText= 'Zurück';
  messages= [];

  constructor() {
    this.db = new PouchDB('logbook');
   }

  async ngOnInit() {
    try{
      const data = await this.db.allDocs({
        include_docs: true
      });

      const rows = data.rows.map((row) => {
        this.messages.push(row.doc.message);
      });
      console.log(data);
    } catch(err) {
      console.log(err);
    }
    
  }

}
