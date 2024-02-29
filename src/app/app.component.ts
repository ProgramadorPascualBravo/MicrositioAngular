import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MetaModule } from '@ngx-meta/core';
import AOS from 'aos';
import 'aos/dist/aos.css';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MetaModule
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Micrositio';
  
  ngOnInit() {
    AOS.init();
  }
}
