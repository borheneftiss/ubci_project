import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvertinscrisComponent } from './avertinscris.component';

describe('AvertinscrisComponent', () => {
  let component: AvertinscrisComponent;
  let fixture: ComponentFixture<AvertinscrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvertinscrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvertinscrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
