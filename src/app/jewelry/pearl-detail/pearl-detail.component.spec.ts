import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlDetailComponent } from './pearl-detail.component';

describe('PearlDetailComponent', () => {
  let component: PearlDetailComponent;
  let fixture: ComponentFixture<PearlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PearlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PearlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
