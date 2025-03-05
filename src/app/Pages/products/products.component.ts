import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../../../models/iproduct';
import { ProductService } from '../../../../service/productService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  mySubscribe: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParamMap.get('category'));
    this.mySubscribe = this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.mySubscribe.unsubscribe();
  }
  deleteHandler(productId: string) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(
        (product) => product.id != productId
      );
    });
  }

  filterBy(name: string) {
    this.router.navigate(['/products'], {
      queryParams: { filterBy: name },
      queryParamsHandling: 'merge',
    });
  }
}