import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFooterBarComponent } from './new-footer-bar.component';

describe('NewFooterBarComponent', () => {
  let component: NewFooterBarComponent;
  let fixture: ComponentFixture<NewFooterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFooterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
