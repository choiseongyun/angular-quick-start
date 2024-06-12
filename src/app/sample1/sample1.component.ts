import { Component } from '@angular/core';

@Component({
  selector: 'app-sample1',
  template: `
    <p>Sample Component Loaded</p>
  `,
  styles: [`
    p {
      color: blue;
    }
  `],
  standalone: true
})
export class Sample1Component { }