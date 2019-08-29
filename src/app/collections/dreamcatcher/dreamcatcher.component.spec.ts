import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamcatcherComponent } from './dreamcatcher.component';

describe('DreamcatcherComponent', () => {
  let component: DreamcatcherComponent;
  let fixture: ComponentFixture<DreamcatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamcatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamcatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
