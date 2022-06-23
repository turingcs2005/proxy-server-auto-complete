import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScaleExampleComponent } from './color-scale-example.component';

describe('ColorScaleExampleComponent', () => {
  let component: ColorScaleExampleComponent;
  let fixture: ComponentFixture<ColorScaleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorScaleExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorScaleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
