import { createInjectionToken } from '../helpers/token.helper'

export const CACHE = createInjectionToken({} as Record<string, unknown>, 'ANGULAR_CACHE', window as any);
