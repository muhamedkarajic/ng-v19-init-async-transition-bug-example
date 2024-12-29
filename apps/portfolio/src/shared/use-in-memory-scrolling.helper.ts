import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, Route, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

export function useInMemoryScrolling(config: ApplicationConfig, routes: Route[]): void {
    const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
    });

    config.providers.push(provideRouter(routes, inMemoryScrollingFeature));
}
