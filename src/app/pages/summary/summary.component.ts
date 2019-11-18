import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {TransactionService} from "../../services/transaction.service";
import {MiniSummaryComponent} from "../summary/mini-summary/mini-summary.component";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @ViewChild(MiniSummaryComponent, {static: false}) viewChild: MiniSummaryComponent;
  nextDis: boolean;
  prevDis: boolean;
  currentMonth: number;
  currentMonth1: number;
  onViewMonth: number;
  onVariable: string;
  onViewMonthName: string;
  onViewMonthNameString: string;
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
    this.onVariable = '_' + Math.random().toString(36).substr(2, 9);
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
    this.onVariable = '_' + Math.random().toString(36).substr(2, 9);
    this.viewChild.ngOnInit();
  }

}
