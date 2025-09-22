import { Component } from '@angular/core';
import { NoticiasComponent } from '../../components/noticias/noticias.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BannersComponent } from '../../components/banners/banners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NoticiasComponent,
    SidebarComponent,
    BannersComponent
  ]
})
export class HomeComponent {}
