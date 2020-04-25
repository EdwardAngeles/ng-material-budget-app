import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from './../../services/budget.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  
  incomes: BudgetItem[];
  
  constructor(private budgetService: BudgetService) { }
  
  ngOnInit(): void {
    this.incomes = this.budgetService.getIncomes();
    
    this.budgetService.budgetsUpdated.subscribe((budgets) => {
      this.incomes = this.budgetService.getIncomes();
      console.log('1!!!');
      console.log(budgets);
    });
  }
  
}
