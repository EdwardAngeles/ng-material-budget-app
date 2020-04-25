import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {
  
  totalAmount: number = 0;
  
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.updateTotalAmount();
    this.budgetService.budgetsUpdated.subscribe(() => {
      this.updateTotalAmount();
    });
  }
  
  updateTotalAmount() {
    this.totalAmount = 0;
    this.budgetService.getBudgets().forEach((budget) => this.totalAmount += budget.amount);
  }

}
