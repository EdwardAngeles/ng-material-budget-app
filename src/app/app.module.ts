import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainComponent } from './components/main/main.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { IncomeListComponent } from './components/income-list/income-list.component';
import { BudgetCardComponent } from './components/budget-card/budget-card.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { BudgetEditFormDialogComponent } from './components/budget-edit-form-dialog/budget-edit-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TotalAmountComponent,
    BudgetFormComponent,
    IncomeListComponent,
    BudgetCardComponent,
    ExpensesListComponent,
    BudgetEditFormDialogComponent
  ],
  entryComponents : [
    BudgetEditFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
