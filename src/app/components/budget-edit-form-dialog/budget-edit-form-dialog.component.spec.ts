import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEditFormDialogComponent } from './budget-edit-form-dialog.component';

describe('BudgetEditFormDialogComponent', () => {
  let component: BudgetEditFormDialogComponent;
  let fixture: ComponentFixture<BudgetEditFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetEditFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEditFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
