import { InjectionToken, inject } from "@angular/core";
import { v4 } from "uuid";
import { CACHE } from '../tokens/cache.token';

export function createInjectionToken<T>(
  defaultValue: T,
  name: string = v4().slice(1, 8),
  cache: Record<string, unknown> | undefined = undefined
): InjectionToken<T> {
  return new InjectionToken<T>(name, {
    providedIn: 'root',
    factory: () => {
      if (!cache)
        cache = inject(CACHE);
      if (!cache[name])
        cache[name] = defaultValue;
      return cache[name] as T;
    }
  });
}