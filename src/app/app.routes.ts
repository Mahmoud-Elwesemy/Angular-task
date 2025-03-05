import { Routes } from '@angular/router';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/Login/login.component';
import { AccountComponent } from './Pages/account/account.component';
import { ProductFormComponent } from './Pages/product-form/productform.component';
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';
import { ProductsComponent } from './Pages/products/products.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
