import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletDetailComponent } from './bracelet-detail.component';

describe('BraceletDetailComponent', () => {
  let component: BraceletDetailComponent;
  let fixture: ComponentFixture<BraceletDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraceletDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraceletDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
