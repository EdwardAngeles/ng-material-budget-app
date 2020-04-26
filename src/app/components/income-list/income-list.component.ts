import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { BudgetService } from './../../services/budget.service';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppSettings } from 'src/app/models/app-setting.model';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  
  incomes: BudgetItem[];
  appSettings: AppSettings;
  
  constructor(
    private budgetService: BudgetService,
    private appSettingsService: AppSettingsService
  ) { }
  
  ngOnInit(): void {
    this.incomes = this.budgetService.getIncomes();
    this.budgetService.budgetsUpdated.subscribe((budgets) => {
      this.incomes = this.budgetService.getIncomes();
    });
    
    this.appSettings = this.appSettingsService.appSettings;
  }
  
  onHeaderClick(): void {
    this.appSettingsService.appSettings.expandIncomeList = !this.appSettingsService.appSettings.expandIncomeList;
    this.appSettingsService.saveData();
  }
  
}
