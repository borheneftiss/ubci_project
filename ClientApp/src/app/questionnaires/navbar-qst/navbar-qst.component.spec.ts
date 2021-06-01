import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarQstComponent } from './navbar-qst.component';

describe('NavbarQstComponent', () => {
  let component: NavbarQstComponent;
  let fixture: ComponentFixture<NavbarQstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarQstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarQstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
