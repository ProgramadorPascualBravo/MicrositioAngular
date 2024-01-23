import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnidadComponent } from './unidad/unidad.component';
import { CompetenciaComponent } from './competencia/competencia.component';
import { DocentesComponent } from './docentes/docentes.component';
import { RecursosComponent } from './recursos/recursos.component';
import { SoporteComponent } from './soporte/soporte.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'unidad', component: UnidadComponent },
  { path: 'competencia', component: CompetenciaComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: "**", redirectTo: "home" },
];
