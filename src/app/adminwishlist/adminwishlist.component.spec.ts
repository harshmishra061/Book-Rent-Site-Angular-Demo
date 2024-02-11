import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwishlistComponent } from './adminwishlist.component';

describe('AdminwishlistComponent', () => {
  let component: AdminwishlistComponent;
  let fixture: ComponentFixture<AdminwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminwishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
