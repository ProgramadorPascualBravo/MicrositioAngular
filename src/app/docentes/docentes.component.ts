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
    this.faqList1.nativeElement.classList.add('show');
  }

  if (this.sosList1) {
    this.sosList1.nativeElement.classList.add('show');
  }
}
  @ViewChild('faqList1') faqList1!: ElementRef;
  @ViewChild('sosList1') sosList1!: ElementRef;


  toggleCollapse(index: number) {
    const element = document.getElementById(`faq-list-${index}`);
    if (element) {
      element.classList.toggle('show');
    }
  }

  toggleSOSList(index: number) {
    const element = document.getElementById(`sos-list-${index}`);
    if (element) {
      element.classList.toggle('show');
    }
  }
}
