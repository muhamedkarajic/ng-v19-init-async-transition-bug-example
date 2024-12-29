import { createInjectionToken } from '../helpers/token.helper';
import { BehaviorSubject } from 'rxjs';

export const SCROLL_CONTAINER = createInjectionToken(new BehaviorSubject<HTMLDivElement>(null as any));
