import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { MiniCategoriesComponent } from './mini-categories/mini-categories.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @ViewChild('frame', { static: true }) frame: ModalDirective;
  @ViewChild(MiniCategoriesComponent, {static: false}) viewChild: MiniCategoriesComponent;
  categoryName: string;
  categoryLimit: string;
  categoryType: string;
  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
  }
  addCategory() {
    const data = {
      userId : '7fa65ff0-4a3e-4cc5-b975-fae5c16b385e',
      categoryName : this.categoryName,
      type : this.categoryType,
      limit : this.categoryLimit
    };
    this.categoryService.postCategories(data).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.viewChild.ngOnInit();
          this.frame.hide();
          this.categoryLimit = null;
          this.categoryType = null;
          this.categoryName = null;
        }
    );
  }


}
