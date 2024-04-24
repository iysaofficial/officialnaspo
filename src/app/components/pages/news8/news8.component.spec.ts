import { ComponentFixture, TestBed } from '@angular/core/testing';
import { News8Component } from './news8.component';

describe(' News8Component', () => {
  let component:  News8Component;
  let fixture: ComponentFixture< News8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  News8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( News8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
