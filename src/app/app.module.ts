
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {Routes, RouterModule} from '@angular/router';
import { MiniSummaryComponent } from './pages/summary/mini-summary/mini-summary.component';
import { MiniTransactionsComponent } from './pages/transactions/mini-transactions/mini-transactions.component';
import { MiniCategoriesComponent } from './pages/categories/mini-categories/mini-categories.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { MiniBudgetComponent } from './pages/budget/mini-budget/mini-budget.component';

const appRoute: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'budget', component: BudgetComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    TransactionsComponent,
    CategoriesComponent,
    MiniSummaryComponent,
    MiniTransactionsComponent,
    MiniCategoriesComponent,
    BudgetComponent,
    MiniBudgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
