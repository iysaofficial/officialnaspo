import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListNews2Component } from './listnews2.component';

describe('ListNews2Component', () => {
  let component: ListNews2Component;
  let fixture: ComponentFixture<ListNews2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNews2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
