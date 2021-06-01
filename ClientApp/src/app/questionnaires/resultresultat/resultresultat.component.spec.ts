import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultresultatComponent } from './resultresultat.component';

describe('ResultresultatComponent', () => {
  let component: ResultresultatComponent;
  let fixture: ComponentFixture<ResultresultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultresultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultresultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
