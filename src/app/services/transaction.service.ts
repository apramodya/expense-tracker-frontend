import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  getTransactions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user_id': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.get('http://localhost:8080/transaction/user', httpOptions);
  }
  getTransactionsByMonth(para) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.get('http://localhost:8080/transaction/time/' + para, httpOptions);
  }
  postTransactions(transaction: Object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    console.log(transaction);
    return this.http.post('http://localhost:8080/transaction', transaction, httpOptions);
  }
  updateTransactions(transaction: Object, transactionId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user_id': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    console.log(transaction);
    return this.http.put('http://localhost:8080/transaction/' +  transactionId, transaction, httpOptions);
  }
  deleteTransactions(tranId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user_id': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.delete('http://localhost:8080/transaction/' + tranId, httpOptions);
  }
}
