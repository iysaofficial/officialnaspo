import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimevenueComponent } from './timevenue.component';

describe('TimevenueComponent', () => {
  let component: TimevenueComponent;
  let fixture: ComponentFixture<TimevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
