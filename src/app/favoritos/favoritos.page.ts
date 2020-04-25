import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  evento;

  constructor(private router: Router) { }

  ngOnInit() {
      this.evento=JSON.parse(localStorage.getItem("eventos")); 
      console.log(this.evento);
  }

}
