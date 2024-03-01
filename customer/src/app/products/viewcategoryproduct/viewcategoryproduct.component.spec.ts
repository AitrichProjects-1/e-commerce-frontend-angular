import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategoryproductComponent } from './viewcategoryproduct.component';

describe('ViewcategoryproductComponent', () => {
  let component: ViewcategoryproductComponent;
  let fixture: ComponentFixture<ViewcategoryproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcategoryproductComponent]
    });
    fixture = TestBed.createComponent(ViewcategoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
