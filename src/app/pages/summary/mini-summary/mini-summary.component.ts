import {ChangeDetectorRef, Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {TransactionService} from "../../../services/transaction.service";

@Component({
  selector: 'app-mini-summary',
  templateUrl: './mini-summary.component.html',
  styleUrls: ['./mini-summary.component.scss']
})
export class MiniSummaryComponent implements OnInit, OnChanges {
  @Input() data: number;
  @Input() variable: string;
  onViewMonth: number;
  onViewYear = new Date().getFullYear();
  amount: number;
  category: string;
  note: string = '';
  transactions = [];
  categories: any;
  parametreString: string;
  transactionId: string;
  income: string;
  expense: string;
  balance: string;

  constructor(private cd: ChangeDetectorRef, private categoryService: CategoryService, private transactionService: TransactionService) { }

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.data;
    // const variable: SimpleChange = changes.variable;
    this.onViewMonth = data.currentValue;
    this.parametreString = this.onViewYear + '-' + this.onViewMonth;
    this.transactionService.getSummaryByMonth(this.parametreString).subscribe(
        data => {
          if (data['income'] || data['expenses'] || data['balance']) {
            this.income = data['income'];
            this.expense = data['expenses'];
            this.balance = data['balance'];
          }
          else{
            this.income = null;
            this.expense = null;
            this.balance = null;
          }
        }
    );
  }

  ngOnInit() {
    this.cd.detectChanges();
  }

}
