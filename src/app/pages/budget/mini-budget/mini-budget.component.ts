import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-mini-budget',
  templateUrl: './mini-budget.component.html',
  styleUrls: ['./mini-budget.component.scss']
})
export class MiniBudgetComponent implements OnInit {

  categories: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data['data'];
        }
    );
  }
}
