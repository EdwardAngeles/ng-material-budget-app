import { BudgetItem } from './../models/budget-item.model';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  budgets: BudgetItem[] = [];
  @Output() budgetsUpdated: EventEmitter<BudgetItem[]> = new EventEmitter<BudgetItem[]>();
  
  constructor() {
    this.loadData();
  }
  
  addBudget(newBudgetItem: BudgetItem): void {
    this.budgets.push(newBudgetItem);
    this.budgetsUpdated.emit(this.budgets);
    
    this.saveData();
  }
  
  removeBudget(budgetToRemove: BudgetItem): void {
    this.budgets.forEach((budget, index) => {
      if (budget === budgetToRemove) this.budgets.splice(index, 1);
    });
    this.budgetsUpdated.emit(this.budgets);
    
    this.saveData();
  }
  
  getBudgets(): BudgetItem[] {
    return this.budgets;
  }
  
  updateBudget(budgetToUpdate: BudgetItem, newBudget: BudgetItem): void {
    budgetToUpdate.amount = newBudget.amount;
    budgetToUpdate.description = newBudget.description;
    
    this.budgetsUpdated.emit(this.budgets);
    this.saveData();
  }
  
  saveData() {
    localStorage.setItem('budgets', JSON.stringify(this.budgets));
  }

  loadData() {
    const data = JSON.parse(localStorage.getItem('budgets')) as BudgetItem[];
    if (!data) return this.budgets = [];
    
    data.forEach(({amount, description}) => {
      this.budgets.push({amount, description});
    });
  }
  
  getIncomes(): BudgetItem[] {
    let incomes: BudgetItem[] = [];
    
    this.budgets.forEach(budgetItem => {
      if (budgetItem.amount > 0) incomes.push(budgetItem);
    });
    
    return incomes;
  }
  
  getExpenses(): BudgetItem[] {
    let expenses: BudgetItem[] = [];
    
    this.budgets.forEach(budgetItem => {
      if (budgetItem.amount < 0) expenses.push(budgetItem);
    });
    
    return expenses;
  }
}
