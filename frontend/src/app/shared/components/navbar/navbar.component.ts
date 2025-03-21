import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, CommonModule, MatIconModule],
})
export class NavbarComponent {
  isDropdownOpen = false;
  isScrolled = false;

  constructor(private eRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleDropdown(event?: KeyboardEvent) {
    if (!event || event.type === 'click' || (event instanceof KeyboardEvent && event.key === 'Enter')) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  logout() {
    console.log('Usuário deslogado');
  }

  // Fechar dropdown ao clicar fora
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.isDropdownOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  // Fechar dropdown ao pressionar "Escape"
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }
}
