import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from 'src/app/services/budget.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppSettings } from 'src/app/models/app-setting.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  
  expenses: BudgetItem[];
  appSettings: AppSettings;
  
  constructor(
    private budgetService: BudgetService,
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.expenses = this.budgetService.getExpenses();
    this.budgetService.budgetsUpdated.subscribe((budgets) => {
      this.expenses = this.budgetService.getExpenses();
    });
    
    this.appSettings = this.appSettingsService.appSettings;
  }
  
  onHeaderClick(): void {
    this.appSettingsService.appSettings.expandExpensesList = !this.appSettingsService.appSettings.expandExpensesList;
    this.appSettingsService.saveData();
  }

}
