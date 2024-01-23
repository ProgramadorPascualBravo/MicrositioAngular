import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CisComponent } from '../cis/cis.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [
    HeaderComponent,
    CisComponent,
    FooterComponent
  ],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

}
