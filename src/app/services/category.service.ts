import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getCategories() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.get('http://localhost:8080/category', httpOptions);
  }
  postCategories(category: Object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.post('http://localhost:8080/category', category, httpOptions);
  }
  updateCategories(category: Object, categoryId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e'
      })
    };
    return this.http.put('http://localhost:8080/category/' + categoryId, category, httpOptions);
  }
  getCategoryLimit(para) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user': '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e',
        'month': para
      })
    };
    return this.http.get('http://localhost:8080/report/category/expense/limit', httpOptions);
  }
}
