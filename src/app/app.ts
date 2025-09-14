import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NoticiasComponent} from './components/noticias/noticias.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './pages/home/home.component.html',
  styleUrls: ['./pages/home/home.component.css'],
  imports: [
    NavbarComponent,
    NoticiasComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class App {
  protected readonly title = signal('muni-huara');
}
