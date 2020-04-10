import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {

  itemRef;
  
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.itemRef = this.db.object('test');
    this.itemRef.snapshotChanges().subscribe(action => {
  console.log(action.type);
  console.log(action.key)
  console.log(action.payload.val())
});
  }

}
