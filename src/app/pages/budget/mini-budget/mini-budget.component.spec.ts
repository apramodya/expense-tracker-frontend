import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBudgetComponent } from './mini-budget.component';

describe('MiniBudgetComponent', () => {
  let component: MiniBudgetComponent;
  let fixture: ComponentFixture<MiniBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
