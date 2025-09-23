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
    title: 'Inicio | Municipalidad de Huara'
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Concejales | Municipalidad de Huara'
  },



  {path:'circulacion',
    loadComponent: () =>
      import('./pages/permisos-circulacion/permisos-circulacion').then(m => m.PermisosCirculacion),
    title: 'P.Circulacion | Municipalidad de Huara'
  },

  {path:'reuniones',
    loadComponent: () =>
      import('./pages/reuniones-consejo-municipal/reuniones-consejo-municipal').then(m => m.ReunionesConsejoMunicipal),
    title: 'Reuniones C.M | Municipalidad de Huara'
  },

  {path:'san-lorenzo',
    loadComponent: () =>
      import('./pages/ordenanzas-san-lorenzo/ordenanzas-san-lorenzo').then(m => m.OrdenanzasSanLorenzo),
    title: 'Ordenanzas S.L | Municipalidad de Huara'
  },

  {path:'ordenanzas-municipales',
    loadComponent: () =>
      import('./pages/ordenanzas-municipales/ordenanzas-municipales').then(m => m.OrdenanzasMunicipales ),
    title: 'Ordenanzas Municipales | Municipalidad de Huara'
  },

  { path: '**', redirectTo: 'home' },
];