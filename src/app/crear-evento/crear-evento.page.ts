import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Evento } from '../Modelo/evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {
  evento: Evento = {};
  constructor(private router: Router, private eventoService: ServiceService) { }


ngOnInit(): void {
  let idEvento = localStorage.getItem('idEvento');
  if (idEvento) {
    this.eventoService.recuperarUno(idEvento)
      .subscribe(resp => {
        this.evento = resp;
      });
    }
}

  guardar() {
  console.log(this.evento);
  this.eventoService.guardar(this.evento)
    .subscribe(resp => {
      console.log(resp);
      alert("Evento creado");
      this.router.navigate(['/tab3']);

    }, err => {
      console.log(err);
    })
  }
  }