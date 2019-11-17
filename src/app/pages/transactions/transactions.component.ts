import {Component, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {TransactionService} from '../../services/transaction.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { MiniTransactionsComponent } from './mini-transactions/mini-transactions.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @ViewChild('frame', { static: true }) frame: ModalDirective;
  @ViewChild(MiniTransactionsComponent, {static: false}) viewChild: MiniTransactionsComponent;
  amount: number;
  category: string;
  note: string = '';
  categories: any;
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
  constructor(private categoryService: CategoryService, private transactionService: TransactionService) {
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data['data'];
        }
    );
  }

  ngOnInit() {
    this.currentMonth = new Date().getMonth();
    this.onViewMonthName = this.monthNames[this.currentMonth];
    this.onViewMonth = this.currentMonth + 1;
    this.currentMonth1 = new Date().getMonth();
    this.onViewMonthNameString = this.monthNames[this.currentMonth1];
  }

  addTransaction() {
    const data = {
      category_id: this.category,
      transaction_amount: this.amount,
      transaction_notes: this.note
    };
    this.transactionService.postTransactions(data).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.onVariable = '_' + Math.random().toString(36).substr(2, 9);
          this.viewChild.ngOnInit();
          this.frame.hide();
          this.amount = null;
          this.category = null;
          this.note = null;
        }
    );
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
