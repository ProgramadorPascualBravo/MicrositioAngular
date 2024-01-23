import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';

@Component({
  selector: 'app-unidad',
  standalone: true,
  imports: [
     HeaderComponent,
    FooterComponent,
    CisComponent,
  ],
  templateUrl: './unidad.component.html',
  styleUrl: './unidad.component.scss'
})
export class UnidadComponent {

}
