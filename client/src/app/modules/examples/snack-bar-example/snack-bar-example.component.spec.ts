import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarExampleComponent } from './snack-bar-example.component';

describe('SnackBarExampleComponent', () => {
  let component: SnackBarExampleComponent;
  let fixture: ComponentFixture<SnackBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
