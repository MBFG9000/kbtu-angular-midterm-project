import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { LucideAngularModule, MoveRight, MoveLeft }  from 'lucide-angular';
import { TourLandingCardComponent } from '../tour-landing-card/tour-landing-card.component';
@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule, TourLandingCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {

  readonly MoveRight = MoveRight;
  readonly MoveLeft = MoveLeft;

  @ViewChild('slider') private sliderRef?: ElementRef<HTMLElement>;

  constructor(private host: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updateParallax();
  }

  scrollSlider(direction: 'next' | 'prev'): void {
    const slider = this.sliderRef?.nativeElement;
    if (!slider || typeof window === 'undefined') {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>('.tour-card');
    if (!firstCard) {
      return;
    }

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    const offset = firstCard.offsetWidth + gap;
    const delta = direction === 'next' ? offset : -offset;

    slider.scrollBy({ left: delta, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateParallax();
  }

  handleContactSubmit(event: Event): void {
    event.preventDefault();
    // Placeholder: integrate with backend or service.
  }

  private updateParallax(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const offset = window.scrollY * -0.18;
    const clamped = Math.max(-260, Math.min(0, offset));
    this.renderer.setStyle(this.host.nativeElement, '--parallax-offset', `${clamped}`);
  }

}
