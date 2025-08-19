import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  imports: [],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      this.isMenuOpen = false; // opcional: cerrar menú móvil al hacer clic
    }
  }
}
