import { Routes } from '@angular/router';
import { PermisosCirculacion } from './pages/permisos-circulacion/permisos-circulacion';
import { ReunionesConsejoMunicipal } from './pages/reuniones-consejo-municipal/reuniones-consejo-municipal';
import { OrdenanzasSanLorenzo } from './pages/ordenanzas-san-lorenzo/ordenanzas-san-lorenzo';
import { OrdenanzasMunicipales } from './pages/ordenanzas-municipales/ordenanzas-municipales';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
  },
  {path:'circulacion', component: PermisosCirculacion},
  {path:'reuniones', component: ReunionesConsejoMunicipal},
  {path:'san-lorenzo', component: OrdenanzasSanLorenzo},
  {path:'ordenanzas-municipales', component: OrdenanzasMunicipales},
  { path: '**', redirectTo: 'home' },
];