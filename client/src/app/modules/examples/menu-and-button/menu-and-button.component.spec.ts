import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAndButtonComponent } from './menu-and-button.component';

describe('MenuAndButtonComponent', () => {
  let component: MenuAndButtonComponent;
  let fixture: ComponentFixture<MenuAndButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAndButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
