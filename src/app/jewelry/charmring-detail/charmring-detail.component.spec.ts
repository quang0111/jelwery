import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmringDetailComponent } from './charmring-detail.component';

describe('CharmringDetailComponent', () => {
  let component: CharmringDetailComponent;
  let fixture: ComponentFixture<CharmringDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmringDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
