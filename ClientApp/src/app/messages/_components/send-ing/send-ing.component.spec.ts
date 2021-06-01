import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendIngComponent } from './send-ing.component';

describe('SendIngComponent', () => {
  let component: SendIngComponent;
  let fixture: ComponentFixture<SendIngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendIngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
