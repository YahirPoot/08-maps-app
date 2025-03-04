import { Routes } from '@angular/router';
import { FullscreenMapPageComponent, HousesPageComponent, MarkersPageComponent } from './pages';

export const routes: Routes = [

  {
    path: 'fullscreen',
    component: FullscreenMapPageComponent,
    title: 'Fullscreen Map',
  },
  {
    path: 'markers',
    component: MarkersPageComponent,
    title: 'Marcadores',
  },
  {
    path: 'houses',
    component: HousesPageComponent,
    title: 'Propiedades disponibles',
  },
  {
    path: '**',
    redirectTo: 'fullscreen',
  },

];
