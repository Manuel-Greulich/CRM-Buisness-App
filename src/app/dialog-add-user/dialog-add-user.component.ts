import { Component, OnInit } from '@angular/core';
// import { Firestore } from '@angular/fire/firestore/firebase';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthdate = new Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef <DialogAddUserComponent>, public firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  saveUser(){
    this.user.birthdate = this.birthdate.getTime();
    console.log('user', this.user);
    this.loading = true;
    
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      this.loading = false; // wenn wir fertig geladen haben
      console.log('adding user finished', result);
      this.dialogRef.close();
      
    });
  }

}
