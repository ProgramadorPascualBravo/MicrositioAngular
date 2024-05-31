import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Meta, Title } from '@angular/platform-browser';

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
  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Ingresa al Campus Digital Institucional - I.U. Pascual Bravo'); // Aquí defines el título dinámico
    this.meta.addTag({ name: 'description', content: 'Accede al Campus Digital de la I.U. Pascual Bravo para estudiar tu programa en modalidad virtual. Ingresa ahora, aprende y pon en práctica.' });
    this.meta.addTag({ name: 'keywords', content: 'Estudiar virtual, Programas virtuales, Modalidad virtual' });
    
  }
}
