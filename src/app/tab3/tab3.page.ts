import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../Service/auth-service.service';
import { User } from './../Modelo/task';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private authService: AuthServiceService){}

  user: User;

 

  ngOnInit(){
  this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }

  onLogout(): void {
    this.authService.logoutUser();
  }
}


