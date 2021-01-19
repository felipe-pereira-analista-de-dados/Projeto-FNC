import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {ExameService} from "../exame.service";

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameComponent implements OnInit {
  formularioExame = this.formBuilder.group({
    paciente: "",
    procedimento: "",
    dataColeta: "",
    dataResultado: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private exameService: ExameService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.exameService
      .cadastra(this.formularioExame.value)
      .subscribe(resposta => console.warn('Exame cadastrado', resposta));
    this.formularioExame.reset(); 
  }

}
