import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './routes';
import { useHashLocationStrategy } from './shared/use-hash-location-strategy.helper';
import { useInMemoryScrolling } from './shared/use-in-memory-scrolling.helper';

const config: ApplicationConfig = { providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
] };

useHashLocationStrategy(config);
useInMemoryScrolling(config, routes);
bootstrapApplication(AppComponent, config);
