import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantDetailComponent } from './pendant-detail.component';

describe('PendantDetailComponent', () => {
  let component: PendantDetailComponent;
  let fixture: ComponentFixture<PendantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
