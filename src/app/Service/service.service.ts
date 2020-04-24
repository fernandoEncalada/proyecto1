import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Evento } from '../Modelo/evento';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  url = environment.urlMicro;

  constructor(private http: HttpClient) { }

  eventos: Observable<any>;

  getEventos(){
    return this.http.get<Evento[]>(this.url + 'evento');
  }

  guardar(evento) {
    return this.http.post<Evento>(this.url + 'evento/', evento);
  }
  /*
  createEvento(evento:Evento){
    return this.http.post<Evento>(this.url,evento);
  }
  */
}
  /*
  getAllTasks() {
    const path =  `${this.api}/evento/`;
    return this.http.get<Evento[]>(path);
  }

  getTask(idEvento: string){
    const path = `${this.api}/evento/${idEvento}`;
    return this.http.get<Evento>(path);
  }

  createTask(evento: Evento) {
  const path = `${this.api}/evento`;
  return this.http.post(path, evento);
}

updateTask(evento: Evento) {
  const path = `${this.api}/evento/${evento.idEvento}`;
  return this.http.put<Evento>(path, evento);
}

deleteTask(idEvento: string) {
  const path = `${this.api}/evento/${idEvento}`;
  return this.http.delete(path);
}


}


*/









  /*
  eventos: Observable<any>;
  evento: Observable<any>;
  public selectedBook: Evento = {
    idEvento: null,
    nombreEvento: '',
    fecha: '',
    hora: '',
    descripcion: '',
    imagenUrl: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllEventos() {
    const url_api = `http://localhost:8081/evento`;
    return this.http.get(url_api);
  }
   
 
  getEventoById(idEvento: string) {
    const url_api = `http://localhost:8081/evento/${idEvento}`;
    return (this.evento = this.http.get(url_api));
  }



  saveEvento(evento: Evento) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this.http
      .post<Evento>(url_api, evento, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateEvento(evento) {
    // TODO: obtener token
    // TODO: not null
    const idEvento = evento.idEvento;
    const token = this.authService.getToken();
    const url_api = `http://localhost:8081/evento/${idEvento}/?access_token=${token}`;
    return this.http
      .put<Evento>(url_api, evento, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteEvento(idEvento: string) {
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:8081/evento/${idEvento}?access_token=${token}`;
    return this.http
      .delete<Evento>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}









  getAllTasks() {
    const path =  `${this.api}/persona/`;
    return this.http.get<User[]>(path);
  }

  getTask(idPersona: string){
    const path = `${this.api}/persona/${idPersona}`;
    return this.http.get<User>(path);
  }

  createTask(task: User) {
  const path = `${this.api}/persona`;
  return this.http.post(path, task);
}

updateTask(task: User) {
  const path = `${this.api}/persona/${task.idPersona}`;
  return this.http.put<User>(path, task);
}

deleteTask(idPersona: string) {
  const path = `${this.api}/persona/${idPersona}`;
  return this.http.delete(path);
}


}
*/