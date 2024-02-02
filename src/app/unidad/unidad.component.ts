import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-unidad',
  standalone: true,
  imports: [
     HeaderComponent,
    FooterComponent,
    CisComponent,
    CarouselModule
  ],
  templateUrl: './unidad.component.html',
  styleUrl: './unidad.component.scss'
})
export class UnidadComponent {

}
