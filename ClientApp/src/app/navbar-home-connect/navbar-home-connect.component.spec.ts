import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomeConnectComponent } from './navbar-home-connect.component';

describe('NavbarHomeConnectComponent', () => {
  let component: NavbarHomeConnectComponent;
  let fixture: ComponentFixture<NavbarHomeConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHomeConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHomeConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
