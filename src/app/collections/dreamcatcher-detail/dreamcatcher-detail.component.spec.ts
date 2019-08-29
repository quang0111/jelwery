import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamcatcherDetailComponent } from './dreamcatcher-detail.component';

describe('DreamcatcherDetailComponent', () => {
  let component: DreamcatcherDetailComponent;
  let fixture: ComponentFixture<DreamcatcherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamcatcherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamcatcherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
