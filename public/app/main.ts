import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch((error) => console.log("An error occured in bootsrap :", error));