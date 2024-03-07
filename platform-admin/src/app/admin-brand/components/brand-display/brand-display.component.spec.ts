import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDisplayComponent } from './brand-display.component';

describe('BrandDisplayComponent', () => {
  let component: BrandDisplayComponent;
  let fixture: ComponentFixture<BrandDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
