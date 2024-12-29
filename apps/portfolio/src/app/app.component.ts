import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, ViewChild, inject } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FixedNavComponent } from './fixed-nav/fixed-nav.component';
import { BehaviorSubject, filter } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { SCROLL$ } from './shared/tokens/scroll.token';
import { SCROLL_CONTAINER } from './shared/tokens/scroll-container.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyLoad from 'vanilla-lazyload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    FixedNavComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
}
