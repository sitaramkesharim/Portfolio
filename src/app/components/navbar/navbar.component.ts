import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDropdownOpen = false;
  isImageModalOpen = false;

  constructor(private renderer: Renderer2, private eRef: ElementRef) {}

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    this.isDropdownOpen = false; // close dropdown after clicking
  }

  toggleDropdown(event?: Event) {
  if (event) {
    event.stopPropagation();
  }
  this.isDropdownOpen = !this.isDropdownOpen;
}

  openImageModal() {
    this.isImageModalOpen = true;
    this.renderer.addClass(document.body, 'no-scroll'); // disable scroll
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll'); // enable scroll
  }

  /** Close dropdown if click outside */
  @HostListener('document:click', ['$event'])
clickOutside(event: Event) {
  if (
    this.isDropdownOpen &&
    !this.eRef.nativeElement.contains(event.target)
  ) {
    this.isDropdownOpen = false;
  }
}

}
