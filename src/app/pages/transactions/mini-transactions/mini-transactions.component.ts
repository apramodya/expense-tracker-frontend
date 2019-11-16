import {Component, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';
import {CategoryService} from '../../../services/category.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-mini-transactions',
  templateUrl: './mini-transactions.component.html',
  styleUrls: ['./mini-transactions.component.scss']
})
export class MiniTransactionsComponent implements OnInit {
  @ViewChild('frame', { static: true }) frame: ModalDirective;
  amount: number;
  category: string;
  note: string = '';
  transactions: any;
  categories: any;
  transactionId: string;
  constructor(private categoryService: CategoryService, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
        data => {
          this.transactions = data['data'];
        }
    );
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data['data'];
        }
    );
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
          this.ngOnInit();
        }
    );
  }

}
