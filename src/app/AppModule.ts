import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { AppComponent } from './app.component'; // Importa el componente principal
import { HomeComponent } from './pages/home/home.component'; // Importa HomeComponent
import { ContactComponent } from './pages/contact/contact.component'; // Importa ContactComponent
import { appRoutes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [  // Declaraciones de los componentes
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Asegúrate de incluir FormsModule aquí
    RouterModule.forRoot(appRoutes) // Configuración de las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]  // Inicia la aplicación con AppComponent
})
export class AppModule { }
