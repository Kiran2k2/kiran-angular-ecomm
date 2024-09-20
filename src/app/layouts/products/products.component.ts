import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../Services/api-products.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   public productList:any;
   constructor(private apiProds:ApiProductsService){}
  ngOnInit(): void {

    this.allProductsList()
    
  }

  allProductsList(){
    this.apiProds.getAllProduct().subscribe(res=>{
      this.productList=res
      console.log(res)
    })
  }
}
