import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrixComponent } from './add-prix.component';

describe('AddPrixComponent', () => {
  let component: AddPrixComponent;
  let fixture: ComponentFixture<AddPrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
