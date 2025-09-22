import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannersComponent } from './components/banners/banners.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    BannersComponent,
    SidebarComponent,
    NoticiasComponent
  ]
})
export class App {
  protected readonly title = signal('muni-huara');
}
