import { Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-mini-categories',
  templateUrl: './mini-categories.component.html',
  styleUrls: ['./mini-categories.component.scss']
})
export class MiniCategoriesComponent implements OnInit {
  @ViewChild('frame', { static: true }) frame: ModalDirective;
  categories: any;
  categoryName: string;
  categoryLimit: string;
  categoryType: string;
  categoryId: string;
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data['data'];
        }
    );
  }

  viewCategory(categoryId) {
    for (const item of this.categories) {
      if (item.categoryId === categoryId) {
        this.categoryName = item.categoryName;
        this.categoryLimit = item.limit;
        this.categoryType = item.type;
        this.categoryId = item.categoryId;
      }
    }
  }

  updateCategory() {
    const data = {
      userId : '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e',
      categoryName : this.categoryName,
      type : this.categoryType,
      limit : this.categoryLimit
    };
    this.categoryService.updateCategories(data, this.categoryId).subscribe(
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
