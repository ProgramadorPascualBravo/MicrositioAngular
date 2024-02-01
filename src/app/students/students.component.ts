import { Component,ElementRef, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CisComponent } from '../cis/cis.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';




@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    HeaderComponent,
    CisComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
   animations: [
    trigger('fadeUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})

export class StudentsComponent {
   elementoAbierto: number | null = null;
   elementoAbiertoVideo: number | null = null;


  @ViewChild('faqList1') faqList1!: ElementRef;
  @ViewChild('sosList1') sosList1!: ElementRef;
  toggleCollapse(index: number) {
    const currentElement = document.getElementById(`faq1-list-${index}`);

    if (this.elementoAbierto !== null && this.elementoAbierto !== index) {
      const previousElement = document.getElementById(`faq1-list-${this.elementoAbierto}`);
      if (previousElement) {
        previousElement.classList.remove('show');
      }
    }

    if (currentElement) {
      currentElement.classList.toggle('show');
    }

    this.elementoAbierto = this.elementoAbierto === index ? null : index;
  }

  // toggleSOSList(index: number) {
  //   const currentElement = document.getElementById(`sos-list-${index}`);

  //   if (this.elementoAbiertoVideo !== null && this.elementoAbiertoVideo !== index) {
  //     const previousElement = document.getElementById(`sos-list-${this.elementoAbiertoVideo}`);
  //     if (previousElement) {
  //       previousElement.classList.remove('show');
  //     }
  //   }

  //   if (currentElement) {
  //     currentElement.classList.toggle('show');
  //   }

  //   this.elementoAbiertoVideo = this.elementoAbiertoVideo === index ? null : index;
  // }
}
