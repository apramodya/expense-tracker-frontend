import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-mini-budget',
  templateUrl: './mini-budget.component.html',
  styleUrls: ['./mini-budget.component.scss']
})
export class MiniBudgetComponent implements OnInit, OnChanges {
  @Input() data: number;
  onViewMonth: number;
  onViewYear = new Date().getFullYear();
  categories = [];
  parametreString: string;
  constructor(private cd: ChangeDetectorRef, private categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.data;
    this.onViewMonth = data.currentValue;
    this.parametreString = this.onViewYear + '-' + this.onViewMonth;
    this.categoryService.getCategoryLimit(this.parametreString).subscribe(
        data => {
          if (data['data'] === 'No records found') {
              console.log(data);
            this.categories = [];
          }
          else{
            this.categories = data['data'];
          }
        }
    );
    // this.categoryService.getCategories().subscribe(
    //     data => {
    //       if (data['data']) {
    //         this.categories = data['data'];
    //       }
    //     }
    // );
  }

  ngOnInit() {
    this.cd.detectChanges();
    // this.categoryService.getCategories().subscribe(
    //     data => {
    //       this.categories = data['data'];
    //     }
    // );
  }
}
