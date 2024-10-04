import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/AppModule';  // Importamos el AppModule

platformBrowserDynamic().bootstrapModule(AppModule)  // Cambiamos a AppModule
  .catch(err => console.error(err));
