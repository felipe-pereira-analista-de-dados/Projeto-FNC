import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExameComponent } from './exame/exame.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ProcedimentoComponent } from './procedimento/procedimento.component';

const routes: Routes = [
  { path: "exame", component: ExameComponent},
  { path: "procedimento", component: ProcedimentoComponent},
  { path: "paciente", component: PacienteComponent},
  { path: "", pathMatch: "full", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
