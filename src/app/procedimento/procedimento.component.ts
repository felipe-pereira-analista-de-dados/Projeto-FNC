import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {ProcedimentoService} from "../procedimento.service";

@Component({
  selector: 'app-procedimento',
  templateUrl: './procedimento.component.html',
  styleUrls: ['./procedimento.component.css']
})
export class ProcedimentoComponent implements OnInit {
  formularioProcedimento = this.formBuilder.group({
    codigo: "",
    nome: "",
    prazoDias: ""
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private procedimentoService: ProcedimentoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.procedimentoService
      .cadastra(this.formularioProcedimento.value)
      .subscribe(resposta => console.warn('Procedimento cadastrado', resposta));
    this.formularioProcedimento.reset(); 
  }

}
