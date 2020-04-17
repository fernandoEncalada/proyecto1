import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from './../Modelo/task';
import { AuthServiceService} from '../Service/auth-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private serviceService: ServiceService, private authService: AuthServiceService) {}
    private user: User = { 
       email: "",
      password: ""
     };

  ngOnInit(){}

  onLogin() {
    return this.authService
    .LoginUser(this.user.email, this.user.password)
    .subscribe(
      data => {
        this.authService.setUser(data);
        let token = data.idLogin;
        this.authService.setToken(token);
      },
      error => console.log(error)
    );
  }




/*
  ngOnInit() {

    this.http.get("http://localhost:8081/persona", { responseType: 'text' }).subscribe(
      (resp: any) => {
        this.email = resp;
    })
}


  getAllTasks(){
    this.serviceService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask(){
    this.serviceService.getTask('1')
    .subscribe(task => {
      console.log(task);
    })
  }

  createTask() {
  const task = {
    email: 'jar@gmail.com',
    name: 'ivan',
    password: 'dshufr4'
  };
  this.serviceService.createTask(task)
  .subscribe((newTask) => {
    console.log(newTask);
  });
  }


  updateTask() {
    const task = {
      idPersona: '3',
      email: 'otro@nombre.com',
      name: 'otro',
      password: '123dsds'
    };
    this.serviceService.updateTask(task)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  deleteTask() {
    this.serviceService.deleteTask('3')
    .subscribe((data) => {
      console.log(data);
    });
  }
  */



}














/*
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
*/
