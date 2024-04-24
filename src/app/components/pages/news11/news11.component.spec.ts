import { ComponentFixture, TestBed } from '@angular/core/testing';
import { News11Component } from './news11.component';

describe(' News11Component', () => {
  let component:  News11Component;
  let fixture: ComponentFixture< News11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  News11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( News11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
