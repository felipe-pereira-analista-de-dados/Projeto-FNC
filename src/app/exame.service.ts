import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(
    private http: HttpClient
  ) { }

  cadastra(exame: Object){
    return  this.http.post("http://localhost:8080/exame",exame);
  }
}
