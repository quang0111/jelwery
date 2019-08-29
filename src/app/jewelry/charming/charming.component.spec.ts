import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmingComponent } from './charming.component';

describe('CharmingComponent', () => {
  let component: CharmingComponent;
  let fixture: ComponentFixture<CharmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
