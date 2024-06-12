import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TestComponent } from './app/test.component';
import { Sample1Component } from './app/sample1/sample1.component';
import { Sample2Component } from './app/sample2/sample2.component';


bootstrapApplication(TestComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(Sample1Component, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(Sample2Component, appConfig)
  .catch((err) => console.error(err));