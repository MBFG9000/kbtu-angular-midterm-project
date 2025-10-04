import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LucideAngularModule, MoveRight, MoveLeft }  from 'lucide-angular';
import { TourLandingCardComponent } from '../tour-landing-card/tour-landing-card.component';
import { ToursProviderService } from '../tours-provider.service';
import { TourCard } from '../models/tours.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule, TourLandingCardComponent, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit, OnInit{
  
  //icons
  readonly MoveRight = MoveRight; readonly MoveLeft = MoveLeft;

  tours: TourCard[] = [];
  contactForm!: FormGroup;
  isSubmitting = false;
  responseMessage = '';

  @ViewChild('slider') private sliderRef?: ElementRef<HTMLElement>;

  constructor(private tourService:ToursProviderService, private host: ElementRef<HTMLElement>, 
    private renderer: Renderer2, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tourService.getTourCards().subscribe({
      next: (data) => this.tours = data,
      error: (err) => console.error('Failed to load tours', err)
    });

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  handleContactSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.responseMessage = '';

    this.tourService.sendMessage(this.contactForm.value).subscribe({
      next: (res) => {
        this.responseMessage = 'Your message has been sent!';
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Error sending message', err);
        this.responseMessage = 'Failed to send message. Please try again later.';
        this.isSubmitting = false;
      },
    });
  }

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

  private updateParallax(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const offset = window.scrollY * -0.18;
    const clamped = Math.max(-260, Math.min(0, offset));
    this.renderer.setStyle(this.host.nativeElement, '--parallax-offset', `${clamped}`);
  }


}
