import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CisComponent,
    CarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: '¿Buscas estudiar virtual? Estudia programas virtuales con la I.U. Pascual Bravo.' });
    this.meta.addTag({ name: 'keywords', content: 'Estudiar virtual, Programas virtuales, Modalidad virtual' });
  }
}
