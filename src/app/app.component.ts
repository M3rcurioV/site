import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component'
import { trigger, transition, style, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        //style({ backgroundColor: 'red' }),
        //animate('2000ms ease', style({ backgroundColor: 'blue' }))
        query(':enter, :leave',
          style({ position: 'absolute', left: 0, width: '100%', opacity: 0 }),
          { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 }), { optional: true }),

        group([
          query(':leave', animate('1000ms ease', style({ transform: 'translateX(-100%)', opacity: 0 })), { optional: true }),
          query(':enter', animate('1000ms ease', style({ transform: 'translateX(0%)', opacity: 1 })), { optional: true }),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'InformaticAssistance.FrontEnd';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
