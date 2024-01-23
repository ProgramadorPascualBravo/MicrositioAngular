import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [
        HeaderComponent,
         FooterComponent,
         CisComponent,
  ],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class SoporteComponent {

}
     