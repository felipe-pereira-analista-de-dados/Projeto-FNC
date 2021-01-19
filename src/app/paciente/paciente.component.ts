import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {PacienteService} from "../paciente.service";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  formularioPaciente = this.formBuilder.group({
    nome: "",
    cpf: "",
    email: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(): void {
    this.pacienteService
      .cadastra(this.formularioPaciente.value)
      .subscribe(resposta => console.warn('Paciente cadastrado', resposta));
    this.formularioPaciente.reset(); 
  }

}
