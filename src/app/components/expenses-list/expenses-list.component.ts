import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  
  expenses: BudgetItem[];
  
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.expenses = this.budgetService.getExpenses();
    
    this.budgetService.budgetsUpdated.subscribe((budgets) => {
      this.expenses = this.budgetService.getExpenses();
    });
  }

}
