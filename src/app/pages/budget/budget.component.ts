import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {TransactionService} from "../../services/transaction.service";
import {MiniBudgetComponent} from "../budget/mini-budget/mini-budget.component";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  @ViewChild(MiniBudgetComponent, {static: false}) viewChild: MiniBudgetComponent;
  nextDis: boolean;
  prevDis: boolean;
  currentMonth: number;
  onViewMonth: number;
  onViewMonthName: string;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private categoryService: CategoryService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.currentMonth = new Date().getMonth();
    this.onViewMonthName = this.monthNames[this.currentMonth];
    this.onViewMonth = this.currentMonth + 1;
  }
  nextMonth() {
    this.onViewMonth = this.onViewMonth + 1;
    this.onViewMonthName = this.monthNames[this.onViewMonth - 1];
    if (this.onViewMonth === 12) {
      this.nextDis = true;
    }
    else{
      this.prevDis = false;
    }
    this.viewChild.ngOnInit();
  }
  prevMonth() {
    this.onViewMonth = this.onViewMonth - 1;
    this.onViewMonthName = this.monthNames[this.onViewMonth - 1];
    if (this.onViewMonth === 1) {
      this.prevDis = true;
    }
    else{
      this.nextDis = false;
    }
    this.viewChild.ngOnInit();
  }

}
