import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrentlistComponent } from './adminrentlist.component';

describe('AdminrentlistComponent', () => {
  let component: AdminrentlistComponent;
  let fixture: ComponentFixture<AdminrentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrentlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
