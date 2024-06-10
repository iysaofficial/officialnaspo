import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jenjangonl23Component } from './jenjangonl23.component';

describe('Jenjangonl23Component', () => {
  let component: Jenjangonl23Component;
  let fixture: ComponentFixture<Jenjangonl23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jenjangonl23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jenjangonl23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
