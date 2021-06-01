import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReponsesComponent } from './add-reponses.component';

describe('AddReponsesComponent', () => {
  let component: AddReponsesComponent;
  let fixture: ComponentFixture<AddReponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
