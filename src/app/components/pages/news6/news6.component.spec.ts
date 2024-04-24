import { ComponentFixture, TestBed } from '@angular/core/testing';
import { News6Component } from './news6.component';

describe(' News6Component', () => {
  let component:  News6Component;
  let fixture: ComponentFixture< News6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  News6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( News6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
