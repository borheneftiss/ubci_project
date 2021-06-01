import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticaleResponsiveComponent } from './menu-verticale-responsive.component';

describe('MenuVerticaleResponsiveComponent', () => {
  let component: MenuVerticaleResponsiveComponent;
  let fixture: ComponentFixture<MenuVerticaleResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticaleResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticaleResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
