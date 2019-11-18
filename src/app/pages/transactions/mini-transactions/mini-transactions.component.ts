import {Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, SimpleChange, ChangeDetectorRef} from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';
import {CategoryService} from '../../../services/category.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-mini-transactions',
  templateUrl: './mini-transactions.component.html',
  styleUrls: ['./mini-transactions.component.scss'],
})
export class MiniTransactionsComponent implements OnInit, OnChanges {
  @ViewChild('frame', { static: true }) frame: ModalDirective;
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
  constructor(private cd: ChangeDetectorRef, private categoryService: CategoryService, private transactionService: TransactionService) {
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
    if (changes) {
        const data: SimpleChange = changes.data;
        const variable: SimpleChange = changes.variable;
        if (variable && !data) {
            if ( !variable.isFirstChange()) {
                this.parametreString = this.onViewYear + '-' + this.onViewMonth;
                this.transactionService.getTransactionsByMonth(this.parametreString).subscribe(
                    data => {
                        if (data['data']) {
                            this.transactions = data['data'];
                        }
                        else{
                            this.transactions = [];
                        }
                    }
                );
                this.categoryService.getCategories().subscribe(
                    data => {
                        if (data['data']) {
                            this.categories = data['data'];
                        }
                    }
                );
            }
        }
        else if (data && variable) {
            if (data.isFirstChange()) {
                this.onViewMonth = data.currentValue;
                this.parametreString = this.onViewYear + '-' + this.onViewMonth;
                this.transactionService.getTransactionsByMonth(this.parametreString).subscribe(
                    data => {
                        if (data['data']) {
                            this.transactions = data['data'];
                        }
                        else{
                            this.transactions = [];
                        }
                    }
                );
                this.categoryService.getCategories().subscribe(
                    data => {
                        if (data['data']) {
                            this.categories = data['data'];
                        }
                    }
                );
            }
        }
        else if (data && !variable) {
            if (!data.isFirstChange()) {
                this.onViewMonth = data.currentValue;
                this.parametreString = this.onViewYear + '-' + this.onViewMonth;
                this.transactionService.getTransactionsByMonth(this.parametreString).subscribe(
                    data => {
                        if (data['data']) {
                            this.transactions = data['data'];
                        }
                        else{
                            this.transactions = [];
                        }
                    }
                );
                this.categoryService.getCategories().subscribe(
                    data => {
                        if (data['data']) {
                            this.categories = data['data'];
                        }
                    }
                );
            }
        }
    }
  }

  ngOnInit() {
    this.cd.detectChanges();
  }

  loadAgain(){
      this.parametreString = this.onViewYear + '-' + this.onViewMonth;
      this.transactionService.getTransactionsByMonth(this.parametreString).subscribe(
          data => {
              if (data['data']) {
                  this.transactions = data['data'];
              }
              else{
                  this.transactions = [];
              }
          }
      );
      this.categoryService.getCategories().subscribe(
          data => {
              if (data['data']) {
                  this.categories = data['data'];
              }
          }
      );
  }

  deleteTransaction(tranId) {
    if (confirm('Áre you sure you want to delete this transaction?')) {
        this.transactionService.deleteTransactions(tranId).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            },
            () => {
                this.loadAgain();
            }
        );
    }
  }

  viewTransaction(tranId){
    for (const item of this.transactions){
      if (item.transactionId === tranId) {
        this.amount = item.amount;
        this.category = item.categoryId;
        this.note = item.remarks;
        this.transactionId = item.transactionId;
      }
    }
  }

  updateTransaction() {
    const data = {
      categoryId: this.category,
      amount: this.amount,
      remarks: this.note
    };
    this.transactionService.updateTransactions(data, this.transactionId).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.frame.hide();
          this.loadAgain();
        }
    );
  }

}
