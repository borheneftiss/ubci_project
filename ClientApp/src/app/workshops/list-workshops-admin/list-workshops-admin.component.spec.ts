import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkshopsAdminComponent } from './list-workshops-admin.component';

describe('ListWorkshopsAdminComponent', () => {
  let component: ListWorkshopsAdminComponent;
  let fixture: ComponentFixture<ListWorkshopsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkshopsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkshopsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
