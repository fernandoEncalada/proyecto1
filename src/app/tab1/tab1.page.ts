import { Component, OnInit } from '@angular/core';
import{ AuthService } from "../servicios/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  loginForm:FormGroup;

  constructor(private auth:AngularFireAuth, private fb:FormBuilder,  private alertController:AlertController) {}

ngOnInit(){
  this.loginForm = this.fb.group({
    email:["", Validators.required],
    password:["", Validators.required]
  })
}

login(){
  this.auth.signInWithEmailAndPassword(
    this.loginForm.controls['email'].value,
    this.loginForm.controls['password'].value
  
  )  .then(userData=>{
    console.log(userData);
  }).catch(e=>{
    this.LoginAlert('Error', e.message)
    console.log(e);
  })
}

async LoginAlert(status, sms) {
  const alert = await this.alertController.create({
    header: status,
    subHeader: sms,
    buttons: ['OK']
  });

  await alert.present();

}
}
