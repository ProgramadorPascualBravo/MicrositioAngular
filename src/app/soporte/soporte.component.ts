import { Component,ElementRef, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CisComponent } from '../cis/cis.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [
        HeaderComponent,
         FooterComponent,
         CisComponent,
         CommonModule,

  ],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})

export class SoporteComponent {
  elementoAbierto: number | null = null;


  @ViewChild('faqList1') faqList1!: ElementRef;

  toggleCollapse(index: number) {
    const currentElement = document.getElementById(`faq-list-${index}`);

    if (this.elementoAbierto !== null && this.elementoAbierto !== index) {
      const previousElement = document.getElementById(`faq-list-${this.elementoAbierto}`);
      if (previousElement) {
        previousElement.classList.remove('show');
      }
    }

    if (currentElement) {
      currentElement.classList.toggle('show');
    }

    this.elementoAbierto = this.elementoAbierto === index ? null : index;
  }
}
