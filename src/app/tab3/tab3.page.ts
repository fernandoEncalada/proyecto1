import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../Service/auth-service.service';
import { User } from './../Modelo/task';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Evento } from '../Modelo/evento';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  eventos:Evento[];

  constructor(private authService: AuthServiceService, private router: Router, private service:ServiceService){}

  Nuevo(){
    this.router.navigate(["crear-evento"]);
  }

  user: User;

 

  ngOnInit(){
  this.user = this.authService.getCurrentUser();
    console.log(this.user);
  this.service.getEventos()
  .subscribe(data=>{
    this.eventos=data;
  })
  }

  onLogout(): void {
    this.authService.logoutUser();
  }

  
}


