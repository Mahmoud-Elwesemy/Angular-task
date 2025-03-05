import { Component } from '@angular/core';

import { NavComponent } from './NavBar/nav.component';

import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [NavComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first';
}
 