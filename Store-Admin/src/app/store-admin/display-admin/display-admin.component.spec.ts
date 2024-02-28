import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminComponent } from './display-admin.component';

describe('DisplayAdminComponent', () => {
  let component: DisplayAdminComponent;
  let fixture: ComponentFixture<DisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAdminComponent]
    });
    fixture = TestBed.createComponent(DisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
