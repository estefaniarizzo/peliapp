import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'contact', component: ContactComponent }, // Página de contacto
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir cualquier ruta desconocida a inicio
];
