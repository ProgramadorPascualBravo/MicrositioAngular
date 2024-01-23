import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [
     HeaderComponent,
    FooterComponent,
    CisComponent,
  ],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.scss'
})
export class RecursosComponent {

}
