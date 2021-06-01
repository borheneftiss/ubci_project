import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReponsesComponent } from './list-reponses.component';

describe('ListReponsesComponent', () => {
  let component: ListReponsesComponent;
  let fixture: ComponentFixture<ListReponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
