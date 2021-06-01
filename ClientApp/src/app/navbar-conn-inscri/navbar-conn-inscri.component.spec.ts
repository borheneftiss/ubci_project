import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConnInscriComponent } from './navbar-conn-inscri.component';

describe('NavbarConnInscriComponent', () => {
  let component: NavbarConnInscriComponent;
  let fixture: ComponentFixture<NavbarConnInscriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarConnInscriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConnInscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
