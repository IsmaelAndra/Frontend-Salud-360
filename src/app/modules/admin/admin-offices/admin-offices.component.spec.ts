import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficesComponent } from './admin-offices.component';

describe('AdminOfficesComponent', () => {
  let component: AdminOfficesComponent;
  let fixture: ComponentFixture<AdminOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOfficesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
