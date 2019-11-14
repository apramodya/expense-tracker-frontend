import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCategoriesComponent } from './mini-categories.component';

describe('MiniCategoriesComponent', () => {
  let component: MiniCategoriesComponent;
  let fixture: ComponentFixture<MiniCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
