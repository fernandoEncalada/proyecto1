import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  usuario = {
    nombre:'',
    apellido:'',
    ciudad:'',
    email:'',
    nombreUsuario:'',
    password: '',
    confirmaPassword:''
  };

  constructor() {}
ngOnInit(){

}

onSubmitTemplate(){
  console.log('form submit');
  console.log(this.usuario);
}
}
