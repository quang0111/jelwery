import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingsDetailComponent } from './rings-detail.component';

describe('RingsDetailComponent', () => {
  let component: RingsDetailComponent;
  let fixture: ComponentFixture<RingsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
