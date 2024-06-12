import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TestComponent } from './app/test.component';


bootstrapApplication(TestComponent, appConfig)
  .catch((err) => console.error(err));
