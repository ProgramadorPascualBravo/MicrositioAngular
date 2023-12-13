import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnidadComponent } from './unidad/unidad.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'unidad', component: UnidadComponent },
];
