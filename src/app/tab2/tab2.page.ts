import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

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
