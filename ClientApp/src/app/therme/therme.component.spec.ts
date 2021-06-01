import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermeComponent } from './therme.component';

describe('ThermeComponent', () => {
  let component: ThermeComponent;
  let fixture: ComponentFixture<ThermeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
