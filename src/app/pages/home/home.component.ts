import { Component } from '@angular/core';

// Importamos los componentes hijos
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NoticiasComponent } from '../../components/noticias/noticias.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NavbarComponent,
    NoticiasComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class HomeComponent {}
