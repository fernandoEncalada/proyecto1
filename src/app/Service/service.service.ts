import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelo/task';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

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
