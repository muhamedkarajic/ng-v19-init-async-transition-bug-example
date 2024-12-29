import { createInjectionToken } from '../helpers/token.helper';
import { BehaviorSubject } from 'rxjs';
import LocomotiveScroll from 'locomotive-scroll';

export const SCROLL$ = createInjectionToken(new BehaviorSubject<LocomotiveScroll>(new LocomotiveScroll()));
