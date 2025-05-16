import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; 
import { appConfig } from './app/app.config'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
}).catch(err => console.error(err));
