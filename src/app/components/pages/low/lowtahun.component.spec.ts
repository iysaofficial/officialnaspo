import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LowtahunComponent } from './lowtahun.component';

describe('LowtahunComponent', () => {
  let component: LowtahunComponent;
  let fixture: ComponentFixture<LowtahunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowtahunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowtahunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
