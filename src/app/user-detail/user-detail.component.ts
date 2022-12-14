import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public firestore: AngularFirestore, public dialog: MatDialog,) { }

  userId = '';
  user: User= new User();

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {  // id abboniert und aus der URL geholt
      this.userId = paramMap.get('id');
      console.log('GOT ID', this.userId);
      this.getUser();
      
    });
  }

  getUser(){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) =>{
      this.user = new User(user);
      console.log('retrivec user', this.user);
      
    });
  }

  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());  // Kopie vom Objekt erstellen weil wir es bearbeiten wollen...über EDIT 
    dialog.componentInstance.userId = this.userId;

  }


  editUserDetail(){
    const dialog = this.dialog.open(DialogEditUserComponent)
    dialog.componentInstance.user = new User(this.user.toJSON()); // Kopie vom Objekt erstellen weil wir es bearbeiten wollen...über EDIT 
    dialog.componentInstance.userId = this.userId;
  }

}
