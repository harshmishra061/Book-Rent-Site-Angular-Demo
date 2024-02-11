import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistedComponent } from './wishlisted.component';

describe('WishlistedComponent', () => {
  let component: WishlistedComponent;
  let fixture: ComponentFixture<WishlistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
