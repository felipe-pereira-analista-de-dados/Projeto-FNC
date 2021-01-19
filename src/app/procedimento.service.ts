import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  constructor(
    private http: HttpClient
  ) { }

  cadastra(procedimento: Object){
    return  this.http.post("http://localhost:8080/procedimento",procedimento);
  }
}
