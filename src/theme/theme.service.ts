// theme.service.ts
import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = false;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.setAttribute(this.element.nativeElement, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(this.element.nativeElement, 'color-theme', 'light');
    }
  }
}
