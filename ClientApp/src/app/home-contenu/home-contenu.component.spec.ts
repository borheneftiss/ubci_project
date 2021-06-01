import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContenuComponent } from './home-contenu.component';

describe('HomeContenuComponent', () => {
  let component: HomeContenuComponent;
  let fixture: ComponentFixture<HomeContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
