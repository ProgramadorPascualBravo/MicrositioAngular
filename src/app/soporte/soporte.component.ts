import { Component,ElementRef, ViewChild} from '@angular/core';
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
ngAfterViewInit() {
  if (this.faqList1) {
    this.faqList1.nativeElement.classList.add('show');
  }

}
  @ViewChild('faqList1') faqList1!: ElementRef;



  toggleCollapse(index: number) {
    const element = document.getElementById(`faq-list-${index}`);
    if (element) {
      element.classList.toggle('show');
    }
  }
}
     