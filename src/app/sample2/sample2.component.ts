import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample2',
  standalone: true,
  imports: [],
  templateUrl: './sample2.component.html',
  styleUrl: './sample2.component.css'
})
export class Sample2Component {
  
  @Input() test : any;
  disabled: boolean = true; // 또는 원하는 초기값 설정
}
