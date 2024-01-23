import { Component,ElementRef, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CisComponent } from '../cis/cis.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [
    HeaderComponent,
    CisComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss',
  animations: [
    trigger('fadeUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class DocentesComponent {
ngAfterViewInit() {
  if (this.faqList1) {
    // Verifica si la referencia no es nula antes de acceder a nativeElement
    this.faqList1.nativeElement.classList.add('show');
  }
}
  @ViewChild('faqList1') faqList1!: ElementRef;


  // Cambiar el estado de un desplegable al hacer clic en él
  toggleCollapse(index: number) {
    const element = document.getElementById(`faq-list-${index}`);
    if (element) {
      element.classList.toggle('show');
    }
  }
}
