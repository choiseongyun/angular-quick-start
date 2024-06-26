import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Component } from './sample1.component';

describe('Sample1Component', () => {
  let component: Sample1Component;
  let fixture: ComponentFixture<Sample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
