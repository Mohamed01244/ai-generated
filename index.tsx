
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';

// Polyfill process.env for the browser environment
// The user provided this key and stated it is their responsibility.
(window as any).process = {
  env: {
    API_KEY: 'AIzaSyAkasfaavizHFiXIYFmM5H3dCxkXOqCZeU'
  }
};

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient()
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
