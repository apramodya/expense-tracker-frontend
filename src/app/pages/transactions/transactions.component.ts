import {Component, OnInit, ViewChild} from '@angular/core';
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
  constructor(private categoryService: CategoryService, private transactionService: TransactionService) {
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data['data'];
        }
    );
  }

  ngOnInit() {
  }

  addTransaction() {
    const data = {
      categoryId: this.category,
      amount: this.amount,
      remarks: this.note
    };
    this.transactionService.postTransactions(data).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.viewChild.ngOnInit();
          this.frame.hide();
          this.amount = null;
          this.category = null;
          this.note = null;
        }
    );
  }
}
