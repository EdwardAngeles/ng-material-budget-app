import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-edit-form-dialog',
  templateUrl: './budget-edit-form-dialog.component.html',
  styleUrls: ['./budget-edit-form-dialog.component.scss']
})
export class BudgetEditFormDialogComponent implements OnInit {

  constructor(
    private budgetService: BudgetService,
    @Inject(MAT_DIALOG_DATA) public budgetItem: BudgetItem
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const updatedBudget: BudgetItem = {
      amount: form.value.amount,
      description: form.value.description
    }
    
    this.budgetService.updateBudget(this.budgetItem, updatedBudget);
  }
  
  onRemove() {
    this.budgetService.removeBudget(this.budgetItem);
  }
  
}
