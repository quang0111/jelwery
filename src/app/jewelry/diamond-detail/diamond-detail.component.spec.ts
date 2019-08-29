import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondDetailComponent } from './diamond-detail.component';

describe('DiamondDetailComponent', () => {
  let component: DiamondDetailComponent;
  let fixture: ComponentFixture<DiamondDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
