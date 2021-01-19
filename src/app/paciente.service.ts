import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(
    private http: HttpClient
  ) { }
  
  cadastra(paciente: Object){
    return  this.http.post("http://localhost:8080/paciente",paciente);
  }
}
