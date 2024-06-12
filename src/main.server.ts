import { bootstrapApplication } from '@angular/platform-browser';
import { TestComponent } from './app/test.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(TestComponent, config);

export default bootstrap;
