import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { BudgetEditFormDialogComponent } from '../budget-edit-form-dialog/budget-edit-form-dialog.component';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {
  
  @Input() budgetItem: BudgetItem;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(BudgetEditFormDialogComponent,
      {data: this.budgetItem, width: '95%', maxWidth: '580px'}
    );
    
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result: ${result}`);
    });
  }

}
