import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MenuComponent 
  ],
    exports: [ 
    MenuComponent 
  ]
})
export class MenuModule { }
