import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SCROLL$ } from '../shared/tokens/scroll.token';
import { createInjectionToken } from '../shared/helpers/token.helper';

export const IS_MOBILE_NAV_ENABLED = createInjectionToken(signal(false));

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedNavComponent {
  isMobileNavEnabled = inject(IS_MOBILE_NAV_ENABLED);
  scroll$ = inject(SCROLL$);
}
