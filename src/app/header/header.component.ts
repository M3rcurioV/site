import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../menu/menu.component'

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
