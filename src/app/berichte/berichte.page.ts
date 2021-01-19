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

   async editItem(id, rev, message) {
     console.log(id);
     console.log(rev);
     console.log(message);

    const res = await this.db.put({
      message: message + " a",
      _id: id,
      _rev: rev
    });

    //Wenn RES ist OK => messages-Array aktualisieren, da ansonsten eine zweite Bearbeitung nicht mehr
    //funktionieren würde.
    
    console.log(res);
   }


  async ngOnInit() {
    try{
      const data = await this.db.allDocs({
        include_docs: true
      });

      console.log(data);

      this.messages = data.rows.map((row) => {
        console.log(row);
        return{
          id: row.doc._id,
          rev: row.doc._rev,
          message: row.doc.message
        };
        //this.messages.push(row.doc.message);

      });
      console.log(data);
    } catch(err) {
      console.log(err);
    }
    
  }

}
