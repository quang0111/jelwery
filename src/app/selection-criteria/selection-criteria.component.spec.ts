import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCriteriaComponent } from './selection-criteria.component';

describe('SelectionCriteriaComponent', () => {
  let component: SelectionCriteriaComponent;
  let fixture: ComponentFixture<SelectionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
