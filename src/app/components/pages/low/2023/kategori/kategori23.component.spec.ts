import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kategori23Component } from './kategori23.component';

describe('Kategori23Component', () => {
  let component: Kategori23Component;
  let fixture: ComponentFixture<Kategori23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kategori23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kategori23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
