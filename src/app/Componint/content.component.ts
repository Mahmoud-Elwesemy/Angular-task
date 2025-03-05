import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-content',
  imports: [FormsModule,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  flag:boolean = false;
  Text:string='';


  // ShowText(e:Event){
  //   let target = e.target as HTMLInputElement;
  //   this.Text=target.value
  // };







// --------------------------------------------------------------------------------


catogre:string []=["All","Phone" , "lap" ,"Shirt"];

 Product:{ProductID:number , ProductName:string ,ProductImg:string ,catogreName:string , Count:number , Producprice:Number}[] = [
  {
    ProductID:1,
    ProductName:"Iphone 12 Pro Max",
    ProductImg:'iphone-12-pro-max.jpg',
    catogreName: "Phone",
    Count:3,
    Producprice:25000
  },
  {
    ProductID:2,
    ProductName:"Phone 11 Pro Max ",
    ProductImg:'iphone-11-pro-max.jpg',
    catogreName: "Phone",
    Count:2,
    Producprice:20000
  },
  {
    ProductID:3,
    ProductName:"Phone 16 Pro",
    ProductImg:'iphone-13-pro.jpg',
    catogreName: "Phone",
    Count:1,
    Producprice:55000
  },
  {
    ProductID:4,
    ProductName:"Shirt",
    ProductImg:'https://pixabay.com/illustrations/ai-generated-shirt-dress-clothing-8429710/',
    catogreName: "Shirt",
    Count:4,
    Producprice:400
  },
  {
    ProductID:5,
    ProductName:"Laptop MacBock Pro",
    ProductImg:'m2-macbook-2018.jpg',
    catogreName: "lap",
    Count:2,
    Producprice:29000
  },
  {
    ProductID:6,
    ProductName:"Laptop MacBock Air 2020",
    ProductImg:'m2-macbooks-2023.jpg',
    catogreName: "lap",
    Count:1,
    Producprice:70000
  }
]

filteredProducts = [...this.Product];
showProduct(category: string)
{
  if (category === "All") {
    this.filteredProducts = [...this.Product]; 
  } else {
    this.filteredProducts = this.Product.filter(item => item.catogreName === category);
  }
}

Buy(productID: number){
  let selectedProduct = this.Product.find(item => item.ProductID === productID);
  if (selectedProduct) {
    if (selectedProduct.Count > 0) {
      alert(`You bought ${selectedProduct.ProductName}`);
      selectedProduct.Count--;
    } else {
      alert(`The ${selectedProduct.ProductName} is Out of Stock`);
    }
  }
}
OutOfStock(){
alert(`Some items are out of stock!`);
}
}

