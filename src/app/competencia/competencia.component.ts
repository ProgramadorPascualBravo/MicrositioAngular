import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';

@Component({
  selector: 'app-competencia',
  standalone: true,
  imports: [
         HeaderComponent,
         FooterComponent,
         CisComponent,
  ],
  templateUrl: './competencia.component.html',
  styleUrl: './competencia.component.scss'
})
export class CompetenciaComponent {

}
