import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMpComponent } from './change-mp.component';

describe('ChangeMpComponent', () => {
  let component: ChangeMpComponent;
  let fixture: ComponentFixture<ChangeMpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
