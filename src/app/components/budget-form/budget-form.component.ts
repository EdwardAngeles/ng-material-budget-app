import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    
    this.budgetService.addBudget({
      amount: form.value.amount,
      description: form.value.description
    });
    
    form.resetForm();
  }
}
