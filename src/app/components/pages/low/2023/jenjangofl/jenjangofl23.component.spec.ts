import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jenjangofl23Component } from './jenjangofl23.component';

describe('Jenjangofl23Component', () => {
  let component: Jenjangofl23Component;
  let fixture: ComponentFixture<Jenjangofl23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jenjangofl23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jenjangofl23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
