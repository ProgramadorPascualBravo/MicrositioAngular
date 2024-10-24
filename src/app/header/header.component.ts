import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  fontSize: number = 16;
  contraste: boolean = false;
  interaccionesRealizadas: number = 0;
  interaccionesRealizadasResta: number = 0;
  limiteInterecciones: number = 4;
  dropdownVisible: boolean = false;
    dropdownVisibleMenu: boolean = false;

  constructor() { }

   redirectSicau() {
   const newWindowSicau = window.open('https://sicau.pascualbravo.edu.co/SICAU/Account/Login', '_blank');
     if (newWindowSicau) {
    newWindowSicau.opener = null;
  } else {
    console.error('No se pudo abrir la ventana.');
  }
  }
   redirectCampus() {
     const newWindowCampus = window.open('https://campus.pascualbravovirtual.edu.co/login/index.php', '_blank');
     if (newWindowCampus) {
    newWindowCampus.opener = null;
  } else {
    console.error('No se pudo abrir la ventana.');
  }
  }

  ngOnInit(): void {
    const contrasteAlmacenado = localStorage.getItem("contraste");
    if (contrasteAlmacenado === "true") {
      this.contraste = true;
      this.aplicarModoContraste();
    }
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleDropdownMenu() {
    this.dropdownVisibleMenu = !this.dropdownVisibleMenu;
  }

 aumentarLetra() {
    if (this.interaccionesRealizadas < this.limiteInterecciones) {
      this.fontSize += 2;
      this.actualizarTamanosFuente();
    }
    this.interaccionesRealizadas++;
  }

  resetearLetra() {
    this.fontSize = 16;
    this.actualizarTamanosFuente();
    this.interaccionesRealizadas = 0;
    this.interaccionesRealizadasResta = 0;
  }

  disminuirLetra() {
    if (this.interaccionesRealizadasResta < this.limiteInterecciones) {
      this.fontSize -= 2;
      this.actualizarTamanosFuente();
    }
    this.interaccionesRealizadasResta++;
  }

  actualizarTamanosFuente() {
    document.body.style.fontSize = this.fontSize + "px";
    const enlaces = document.querySelectorAll("a");
    enlaces.forEach((enlace: any) => {
      enlace.style.fontSize = this.fontSize + "px";
    });
  }

  cambiarContraste() {
    this.contraste = !this.contraste;

    if (this.contraste) {
      this.aplicarModoContraste();
    } else {
      this.quitarModoContraste();
    }

    localStorage.setItem("contraste", this.contraste.toString());
  }

  quitarModoContraste() {
    document.body.classList.remove("dark-body");
  }

  aplicarModoContraste() {
    document.body.classList.add("dark-body");
  }
}
