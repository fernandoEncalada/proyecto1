import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import{ AuthService } from "../servicios/auth.service";
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  constructor(private auth:AngularFireAuth, private fb:FormBuilder, private alertController:AlertController,
     private db:AngularFireDatabase) {}

  registerForm:FormGroup;

ngOnInit(){
  this.registerForm = this.fb.group({
    name:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    confirm:['', Validators.required]

  })
}

register(){
  let user = {
  email:this.registerForm.controls['email'].value,
  password: this.registerForm.controls['password'].value
}
if(user.password == this.registerForm.controls['confirm'].value){
  this.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(userData=>{
      this.registerAlert('Sucess', "El usuario ha sido creado correctamente")
      this.db.database.ref('user/'+userData.user.uid).set(this.registerForm.value)
      console.log(userData);
    }).catch(e=>{
      this.registerAlert('Error', e.message)
      console.log(e);
    })
}
    
}

async registerAlert(status, sms) {
  const alert = await this.alertController.create({
    header: status,
    subHeader: sms,
    buttons: ['OK']
  });

  await alert.present();
}



}
